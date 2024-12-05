import AWS from "aws-sdk";

const endpoint = process.env.SPACE_ENDPOINT || "";
const spacesEndpoint = new AWS.Endpoint(endpoint);
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.SPACE_ACCESS_KEY || "",
  secretAccessKey: process.env.SPACE_SECRET_KEY || "",
});

export class FileUploadService {
  async uploadFile(file: any, fileName: string): Promise<string> {
    const randomFileName = `${Date.now()}-${fileName}`;
    const params = {
      Bucket: process.env.SPACE_NAME || "",
      Key: `betta/${randomFileName}`,
      Body: file.buffer,
      ACL: "public-read",
      ContentType: file.mimetype,
      ContentLength: file.size,
      ContentDisposition: "inline",
    };

    try {
      const data = await s3.upload(params).promise();
      return data.Location;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw new Error("File upload failed");
    }
  }

  async deleteFile(fileName: string) {
    const params = {
      Bucket: process.env.SPACE_NAME || "",
      Key: `betta/${fileName}`,
    };

    try {
      await s3.deleteObject(params).promise();
    } catch (error) {
      console.error("Error deleting file:", error);
      throw new Error("File deletion failed");
    }
  }

  async deleteFiles(fileNames: string[]) {
    const deleteFilePromises = fileNames.map((fileName) =>
      this.deleteFile(fileName)
    );
    await Promise.all(deleteFilePromises);
  }
}
