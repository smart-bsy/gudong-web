import { request } from "./config";

export const requestGetCode = async (phone) => {
  return request.get(`/user/code?phone=${phone}`);
};

/**
 * body: {
 *  phone
 *  code
 * }
 */
export const requestLogin = async (body) => {
  return request.post("/user/login", body);
};

export const requestGetUserInfo = async () => {
  return request.get(`/user`);
};

export const requestCompleteTask1 = async (body) => {
  return request.post("/task/step1", body);
};

export const requestCompleteTask2 = async (fileList) => {
  const formData = new FormData();
  console.log(fileList);
  fileList.forEach((file) => {
    formData.append("files", file);
  });
  return request.post("/task/step2", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const requestGetTaskStatus = async () => {
  return request.get("/task/status");
};
