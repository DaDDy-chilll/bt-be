import { Request, Response } from "express";
import { FileUploadService } from "../services/file_upload.service";
import { PhotoService } from "../services/photo.service";
import multer from "multer";
import { randomUUID } from "crypto";

// multer
const upload = multer();

// services
const file_upload_service = new FileUploadService();
const photo_service = new PhotoService();

export const uploadFile = [
  upload.single("file"),
  async (req: Request, res: Response): Promise<any> => {
    try {
      const file: any = req.file;
      const fileName = randomUUID();
      const fileUrl = await file_upload_service.uploadFile(file, fileName);
      const photo = await photo_service.createPhoto({
        photo_path: fileUrl,
      });
      return res.status(200).json({
        success: true,
        message: "File uploaded successfully",
        data: {
          photo_path: fileUrl,
          id: Number(photo.id),
          code: Number(photo.code),
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Error uploading file",
        error: error,
      });
    }
  },
];

export const updatePhoto = [
  upload.single("file"),
  async (req: Request, res: Response): Promise<any> => {
    try {
      const photo_id = req.params.id;
      const existingPhoto = await photo_service.getPhotoById(Number(photo_id));
      if (!existingPhoto) {
        return res.status(404).json({
          success: false,
          message: "Photo not found",
        });
      }

      await file_upload_service.deleteFile(
        existingPhoto.photo_path.split("/").pop() || ""
      );
      const file: any = req.file;
      const fileName = randomUUID();
      const fileUrl = await file_upload_service.uploadFile(file, fileName);
      const updatedPhoto = await photo_service.updatePhoto(
        Number(photo_id),
        fileUrl
      );
      return res.status(200).json({
        success: true,
        message: "File updated successfully",
        data: {
          photo_path: fileUrl,
          id: Number(updatedPhoto.id),
          code: Number(updatedPhoto.code),
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Error uploading file",
        error: error,
      });
    }
  },
];

export const deleteEntryDatas = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const m_photos = req.body.m_photos;
    const deletedPhotoPaths = await photo_service.deletePhotoPaths(m_photos);
    console.log(deletedPhotoPaths);
    await file_upload_service.deleteFiles(deletedPhotoPaths);

    await photo_service.deletePhotos(m_photos);
    return res.status(200).json({
      success: true,
      message: "Entry datas deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error deleting entry datas",
      error: error,
    });
  }
};
