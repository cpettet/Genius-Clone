import Cookies from "js-cookie";

export async function csrfFetch(url, options = {}) {
  // set options.method to get if no method
  options.method = options.method || "GET";
  // set options.headers to empty object if no headers
  options.headers = options.headers || {};

  // if options.method is not "get", set "content-type" to "application/json"
  // and set "xsrf-token" header to value of "xsrf-token" cookie
  if (options.method.toUpperCase() !== "GET") {
    options.headers["Content-Type"] =
      options.headers["Content-Type"] || "application/json";
    options.headers["XSRF-Token"] = Cookies.get("XSRF-TOKEN");
  }
  // call default window's fetch with the url and options passed in
  const res = await window.fetch(url, options);

  // if the response status code is 400 or above, throw an error with the error
  // being the response
  if (res.status >= 400) throw res;

  // if the response status code is under 400, return the response to the next
  // promise chain
  return res;
}

// call this to get the 'xsrf-token' cookie; ONLY USE IN DEVELOPMENT
export function restoreCSRF() {
  return csrfFetch("/api/csrf/restore");
}