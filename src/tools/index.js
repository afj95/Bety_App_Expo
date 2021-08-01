export const timeoutPromise = (url) => {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new Error("Timeout, Server is not responding"));
      }, 1000 * 60 * 2);
      url.then(res => {
          clearTimeout(timeoutId);
          resolve(res);
        }, (err) => {
          clearTimeout(timeoutId);
          reject(err);
        }
      );
    });
};