import { Router } from "express";

const router = Router();
import * as FileUploadController from "../controller/file_upload.controller";
import { AuthGuard } from "../AuthGuard/auth.guard";
import { validateBody } from "../Validation/vine.validator";
import { schema } from "../Validation/vine.validator";

router.post("/", AuthGuard, FileUploadController.uploadFile);

router.put("/:id", AuthGuard, FileUploadController.updatePhoto);

router.post(
  "/delete-entry-datas",
  AuthGuard,
  validateBody(schema.product.deleteEntryDatas),
  FileUploadController.deleteEntryDatas
);
export default router;
