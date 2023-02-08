import { Docs } from "icse-react-assets";

export const DocExample = () => {
  return (
    <Docs
      content={[
        {
          text: "IBM Cloud Object Storage (COS) is a highly available, durable, and secure platform for storing unstructured data. PDFs, media files, database backups, disk images, large structured datasets can be uploaded as objects and then organized into containers named Buckets.",
          className: "marginBottomSmall",
        },
        {
          subHeading: "Configuration",
        },
        {
          text: "The initial configuration includes two COS instances:",
          className: "marginBottomXs",
        },
        {
          table: [
            ["_headers", "Instance Name", "Description"],
            [
              "cos",
              "A COS instance with two buckets, a management bucket and a workload bucket, where respective objects can be stored",
            ],
            [
              "atracker-cos",
              "A COS instance with a bucket where Activity Tracker logs will be stored",
            ],
          ],
        },
      ]}
      relatedLinks={[["cloud.ibm.com/docs", "IBM Cloud Docs"]]}
    />
  );
};
