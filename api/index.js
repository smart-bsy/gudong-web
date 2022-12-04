import { request } from "./config";

export const requestGetCode = async (phone) => {
  return request.get(`/bus/getCode?phone=${phone}`);
};

/**
 * body: {
 *  phone
 *  code
 * }
 */
export const requestLogin = async (body) => {
  return request.post("/bus/login", body);
};

export const requestGetUserInfo = async () => {
  return request.get(`/gudong/usesr`);
};

export const requestPostForm1 = async (body) => {
  return request.post("/gudong/form1", body);
};

export const requestUploadScreenshot = async (fileList) => {
  const formData = new FormData();
  formData.append("files", fileList);
  return request.post("/gudong/share/screenshot", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
