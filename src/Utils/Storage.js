import CryptoJS from "crypto-js";


export const saveToken = (data) => {
  localStorage.setItem("token", data?.token);
  localStorage.setItem('loginType', CryptoJS.AES.encrypt((data?.loginType), 'edufynd').toString())
 
  if (data?.loginType === 'superAdmin') {
    localStorage.setItem('superAdminId', CryptoJS.AES.encrypt((data?.superAdminId), 'edufynd').toString())
  }
  if (data?.loginType === 'staff') {
    localStorage.setItem('staffId', CryptoJS.AES.encrypt((data?.staffId), 'edufynd').toString())
  }
  
};

export const getToken = () => {
  return localStorage.getItem("token");
};



export const getSuperAdminId = () => {
  const superAdminId = localStorage.getItem('superAdminId')
  return CryptoJS.AES.decrypt(superAdminId, 'edufynd').toString(CryptoJS.enc.Utf8)
};



export const getStaffId = () => {
  const staffId = localStorage.getItem('staffId')
  return CryptoJS.AES.decrypt(staffId, 'edufynd').toString(CryptoJS.enc.Utf8)
};

export const getLoginType = () => {
  const loginType = localStorage.getItem('loginType')
  return CryptoJS.AES.decrypt(loginType, 'edufynd').toString(CryptoJS.enc.Utf8)
};

export const clearStorage = () => {
  localStorage.clear()
};