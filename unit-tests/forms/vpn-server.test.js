const { assert } = require("chai");
const {
  handleVpnServerInputChange,
} = require("../../src/lib/forms/vpn-server");

describe("vpn-server", () => {
  describe("handleVpnServerInputChange", () => {
    it("should clear client_ca_crn when method changes", () => {
      let event = {
        target: { name: "method", value: "certificate" },
      };
      let currentState = {
        method: "username",
        client_ca_crn: "CHEATER",
      };
      let expectedData = {
        method: "certificate",
        client_ca_crn: "",
      };
      assert.deepEqual(
        handleVpnServerInputChange(currentState, event),
        expectedData
      );
    });
    it("should clear subnet and security groups when vpc changes", () => {
      let event = {
        target: { name: "vpc", value: "workload" },
      };
      let currentState = {
        vpc: "management",
        subnets: ["vpe-zone-1"],
        security_groups: ["management-vpe"],
      };
      let expectedData = {
        vpc: "workload",
        subnets: [],
        security_groups: [],
      };
      assert.deepEqual(
        handleVpnServerInputChange(currentState, event),
        expectedData
      );
    });
    it("should handle crn input for certificate_crn", () => {
      let event = {
        target: {
          name: "certificate_crn",
          value:
            "crn : v1:bluemix:public:cloudcerts:us-south:a/efe5afc483594adaa8325e2b4d1290df:86f62739-f3a8-42ac-abea-f23255965983:certificate:00406b5615f95dba9bf7c2ab52bb3083",
        },
      };
      let currentState = { certificate_crn: "" };
      let expectedData = {
        certificate_crn:
          "crn:v1:bluemix:public:cloudcerts:us-south:a/efe5afc483594adaa8325e2b4d1290df:86f62739-f3a8-42ac-abea-f23255965983:certificate:00406b5615f95dba9bf7c2ab52bb3083",
      };
      assert.deepEqual(
        handleVpnServerInputChange(currentState, event),
        expectedData
      );
    });
    it("should handle crn input for client_ca_crn", () => {
      let event = {
        target: {
          name: "client_ca_crn",
          value:
            "crn:!@#v1:bluemix:public:cloudcerts:us-south:a/efe5afc483594adaa8325e2b4d1290df:86f62739-f3a8-42ac-abea-f23255965983:certificate:00406b5615f95dba9bf7c2ab52bb3083",
        },
      };
      let currentState = { client_ca_crn: "" };
      let expectedData = {
        client_ca_crn:
          "crn:v1:bluemix:public:cloudcerts:us-south:a/efe5afc483594adaa8325e2b4d1290df:86f62739-f3a8-42ac-abea-f23255965983:certificate:00406b5615f95dba9bf7c2ab52bb3083",
      };
      assert.deepEqual(
        handleVpnServerInputChange(currentState, event),
        expectedData
      );
    });
    it("should handle crn input for empty string case", () => {
      let event = {
        target: {
          name: "client_ca_crn",
          value: "",
        },
      };
      let currentState = { client_ca_crn: "" };
      let expectedData = {
        client_ca_crn: [],
      };
      assert.deepEqual(
        handleVpnServerInputChange(currentState, event),
        expectedData
      );
    });
    it("should handle protocol input", () => {
      let event = {
        target: {
          name: "protocol",
          value: "TCP",
        },
      };
      let currentState = { protocol: "UDP" };
      let expectedData = {
        protocol: "tcp",
      };
      assert.deepEqual(
        handleVpnServerInputChange(currentState, event),
        expectedData
      );
    });
    it("should handle empty spaces in client_dns_server_ip input", () => {
      let event = {
        target: {
          name: "client_dns_server_ips",
          value: "1.1.1.1, 2.2.2.2",
        },
      };
      let currentState = { client_dns_server_ips: "" };
      let expectedData = {
        client_dns_server_ips: "1.1.1.1,2.2.2.2",
      };
      assert.deepEqual(
        handleVpnServerInputChange(currentState, event),
        expectedData
      );
    });
    it("should handle client_dns_server_ip input for empty string case", () => {
      let event = {
        target: {
          name: "client_dns_server_ips",
          value: "",
        },
      };
      let currentState = { client_dns_server_ips: "1.1.1.1" };
      let expectedData = {
        client_dns_server_ips: null,
      };
      assert.deepEqual(
        handleVpnServerInputChange(currentState, event),
        expectedData
      );
    });
    it("should handle all other inputs", () => {
      let event = {
        target: {
          name: "port",
          value: "22",
        },
      };
      let currentState = { port: "" };
      let expectedData = {
        port: "22",
      };
      assert.deepEqual(
        handleVpnServerInputChange(currentState, event),
        expectedData
      );
    });
  });
});
