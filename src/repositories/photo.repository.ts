import { PrismaClient } from "@prisma/client";
import { PhotoInstance } from "../instances/photo/create.instance";
import { FileUploadService } from "../services/file_upload.service";

export class PhotoRepository {
  private prisma = new PrismaClient();

  file_upload_service = new FileUploadService();
  async create(data: PhotoInstance) {
    return await this.prisma.m_photos.create({
      data,
    });
  }

  async getPhotoById(id: number) {
    return await this.prisma.m_photos.findFirst({
      where: { id: BigInt(id) },
    });
  }

  async update(id: number, photo_path: string) {
    return await this.prisma.m_photos.update({
      where: { id: BigInt(id) },
      data: { photo_path },
    });
  }

  async delete(id: number) {
    return await this.prisma.m_photos.delete({
      where: { id: BigInt(id) },
    });
  }

  async deletePhotos(m_photos: any) {
    m_photos.forEach(async (photo: any) => {
      const existingPhoto = await this.getPhotoById(Number(photo.id));
      if (existingPhoto && existingPhoto.product_id === null) {
        await this.delete(Number(photo.id));
      }
    });
  }

  async deletePhotoPaths(m_photos: any): Promise<string[]> {
    const photoPaths = m_photos.map(async (photo: any) => {
      const existingPhoto = await this.getPhotoById(Number(photo.id));
      return existingPhoto?.photo_path.split("/").pop();
    });
    return await Promise.all(photoPaths);
  }
}
