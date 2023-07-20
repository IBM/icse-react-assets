const { assert } = require("chai");
const {
  getRuleProtocol,
  getSubRule,
  swapArrayElements,
  getOrderCardClassName,
} = require("../../src/lib/forms");
const {
  setupRowsAndHeaders,
} = require("../../src/lib/forms/networking-order-card");

describe("networking-order-card", () => {
  describe("getRuleProtocol", () => {
    it('should return "all" when all fields are null', () => {
      const rule = {
        icmp: { type: null, code: null },
        tcp: {
          source_port_min: null,
          source_port_max: null,
          port_max: null,
          port_min: null,
        },
        udp: {
          source_port_min: null,
          source_port_max: null,
          port_max: null,
          port_min: null,
        },
      };
      const result = getRuleProtocol(rule);
      assert.strictEqual("all", result);
    });
    it('should return "icmp" when icmp field is not null', () => {
      const rule = {
        icmp: { type: 2, code: null },
        tcp: {
          source_port_min: null,
          source_port_max: null,
          port_max: null,
          port_min: null,
        },
        udp: {
          source_port_min: null,
          source_port_max: null,
          port_max: null,
          port_min: null,
        },
      };
      const result = getRuleProtocol(rule);
      assert.strictEqual("icmp", result);
    });

    it('should return "tcp" when tcp field is not null', () => {
      const rule = {
        icmp: { type: null, code: null },
        tcp: {
          source_port_min: 12222,
          source_port_max: null,
          port_max: null,
          port_min: null,
        },
        udp: {
          source_port_min: null,
          source_port_max: null,
          port_max: null,
          port_min: null,
        },
      };
      const result = getRuleProtocol(rule);
      assert.strictEqual("tcp", result);
    });

    it('should return "udp" when udp field is not null', () => {
      const rule = {
        icmp: { type: null, code: null },
        tcp: {
          source_port_min: null,
          source_port_max: null,
          port_max: null,
          port_min: null,
        },
        udp: {
          source_port_min: null,
          source_port_max: null,
          port_max: null,
          port_min: 20000,
        },
      };
      const result = getRuleProtocol(rule);
      assert.strictEqual("udp", result);
    });
  });
  describe("getSubRule", () => {
    let rule;
    let defaultRule;
    beforeEach(() => {
      rule = {
        icmp: { type: null, code: null },
        tcp: {
          source_port_min: null,
          source_port_max: null,
          port_max: null,
          port_min: null,
        },
        udp: {
          source_port_min: null,
          source_port_max: null,
          port_max: null,
          port_min: null,
        },
      };
      defaultRule = {
        port_max: null,
        port_min: null,
        source_port_max: null,
        source_port_min: null,
        type: null,
        code: null,
      };
    });
    it("should create an icmp rule", () => {
      let expectedData = { ...defaultRule };
      expectedData.code = 254;
      rule.icmp.code = 254;
      assert.deepEqual(getSubRule(rule, false), expectedData);
    });
    it("should create a udp rule", () => {
      let expectedData = { ...defaultRule };
      expectedData.source_port_max = 23454;
      rule.udp.source_port_max = 23454;
      assert.deepEqual(getSubRule(rule, false), expectedData);
    });
    it("should create a tcp rule", () => {
      let expectedData = { ...defaultRule };
      expectedData.source_port_max = 23454;
      rule.tcp.source_port_max = 23454;
      assert.deepEqual(getSubRule(rule, false), expectedData);
    });
    it("should pass default rule if all", () => {
      let expectedData = { ...defaultRule };
      assert.deepEqual(getSubRule(rule, false), expectedData);
    });
    it("should not have source when isSecurityGroup", () => {
      let expectedData = { ...defaultRule };
      expectedData.port_max = 23454;
      rule.tcp.port_max = 23454;
      delete expectedData.source_port_max;
      delete expectedData.source_port_min;
      assert.deepEqual(getSubRule(rule, true), expectedData);
    });
  });
  describe("swapArrayElements", () => {
    it("should swap the elements at the given indices in the array", () => {
      const arr = [1, 2, 3, 4, 5];
      swapArrayElements(arr, 1, 3);
      assert.deepEqual(arr, [1, 4, 3, 2, 5]);
    });
    it("should not modify the array if the indices are the same", () => {
      const arr = [1, 2, 3, 4, 5];
      swapArrayElements(arr, 2, 2);
      assert.deepEqual(arr, [1, 2, 3, 4, 5]);
    });
  });
  describe("getOrderCardClassName", () => {
    it("should have formInSubForm if sec group", () => {
      assert.deepEqual(
        "marginBottomSmall positionRelative formInSubForm",
        getOrderCardClassName({ isSecurityGroup: true }),
      );
    });
    it("should have subForm if not sec group", () => {
      assert.deepEqual(
        "marginBottomSmall positionRelative subForm",
        getOrderCardClassName({ isSecurityGroup: false }),
      );
    });
  });
  describe("setupRowsAndHeaders", () => {
    let componentProps;
    beforeEach(() => {
      componentProps = {
        rules: [
          {
            action: "allow",
            destination: "10.0.0.0/8",
            direction: "inbound",
            name: "allow-ibm-inbound",
            source: "161.26.0.0/16",
            icmp: {
              type: null,
              code: null,
            },
            tcp: {
              port_min: null,
              port_max: null,
              source_port_min: null,
              source_port_max: null,
            },
            udp: {
              port_min: null,
              port_max: null,
              source_port_min: null,
              source_port_max: null,
            },
          },
        ],
        isSecurityGroup: false,
      };
    });
    it("should have all the headers when acl", () => {
      let expectedRows = [
        {
          action: "allow",
          destination: "10.0.0.0/8",
          direction: "inbound",
          name: "allow-ibm-inbound",
          id: "allow-ibm-inbound",
          source: "161.26.0.0/16",
          protocol: "all",
          port: "ALL",
        },
      ];
      let expectedHeaders = [
        {
          key: "name",
          header: "Name",
        },
        { key: "action", header: "Action" },
        { key: "direction", header: "Direction" },
        { key: "source", header: "Source" },
        { key: "destination", header: "Destination" },
        { key: "protocol", header: "Protocol" },
        { key: "port", header: "Port" },
      ];

      let componentState = setupRowsAndHeaders(componentProps);
      assert.deepEqual(expectedHeaders, componentState.headers);
      assert.deepEqual(expectedRows, componentState.rows);
    });
    it("should not have destination or action when sg", () => {
      componentProps.isSecurityGroup = true;
      componentProps.rules[0].icmp.code = 12;
      let expectedRows = [
        {
          action: "allow",
          destination: "10.0.0.0/8",
          direction: "inbound",
          name: "allow-ibm-inbound",
          id: "allow-ibm-inbound",
          source: "161.26.0.0/16",
          protocol: "icmp",
          port: 12,
        },
      ];
      let expectedHeaders = [
        {
          key: "name",
          header: "Name",
        },
        { key: "direction", header: "Direction" },
        { key: "source", header: "Source" },
        { key: "protocol", header: "Protocol" },
        { key: "port", header: "Port" },
      ];

      let componentState = setupRowsAndHeaders(componentProps);
      assert.deepEqual(expectedHeaders, componentState.headers);
      assert.deepEqual(expectedRows, componentState.rows);
    });
    it("should have port min and max on udp or tcp", () => {
      componentProps.isSecurityGroup = true;
      componentProps.rules[0].udp.port_min = 80;
      componentProps.rules[0].udp.port_max = 8080;

      let expectedRows = [
        {
          action: "allow",
          destination: "10.0.0.0/8",
          direction: "inbound",
          name: "allow-ibm-inbound",
          id: "allow-ibm-inbound",
          source: "161.26.0.0/16",
          protocol: "udp",
          port: "80-8080",
        },
      ];

      let componentState = setupRowsAndHeaders(componentProps);
      assert.deepEqual(expectedRows, componentState.rows);
    });
  });
});
