// store/api.js

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:9292/api/";

// Ensure URL is correctly concatenated
const buildUrl = (url) => `${API_BASE_URL.replace(/\/$/, "")}/${url.replace(/^\//, "")}`;

const apiFetch = async (url, { method = "GET", body = null, auth = true, success = null, error = null } = {}) => {
  const headers = {};

  // Attach auth only if requested
  if (auth) {
    const token = localStorage.getItem("authToken");
    if (!token) {
      const errorMessage = "Unauthorized";
      if (error) error(errorMessage);
      throw new Error(errorMessage);
    }
    headers["Authorization"] = `Bearer ${token}`;
  }

  if (body) headers["Content-Type"] = "application/json";

  const response = await fetch(buildUrl(url), {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  let data;
  try {
    data = await response.json(); 
  } catch {
    data = null; 
  }

  if (!response.ok) {
    const errorMessage = data?.message || response.statusText || "Something went wrong";
    if (error) error(errorMessage);
    throw new Error(errorMessage);
  }

  if (success) success(data);
  return data;
};

// Public API helper
export const api = {
  get: (url, options = {}) => apiFetch(url, { ...options, method: "GET" }),
  post: (url, body, options = {}) => apiFetch(url, { ...options, method: "POST", body }),
  put: (url, body, options = {}) => apiFetch(url, { ...options, method: "PUT", body }),
  delete: (url, options = {}) => apiFetch(url, { ...options, method: "DELETE" }),
};
