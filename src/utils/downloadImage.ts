import { DownloaderHelper } from "node-downloader-helper";
import determinePath from "./determinePath.js";

const path = determinePath();

const downloadeImage = (url: string) => {
  const createImageName = url.split("/").slice(-1)[0] += ".webp";
  const dl = new DownloaderHelper(url, path, {
    fileName: createImageName,
    override: { skip: true }
  });
  console.log(createImageName);

  dl.on('end', () => console.log('Download Completed'));
  dl.on('error', (err) => console.log('Download Failed', err));
  dl.start().catch(err => console.error(err));
}

export default downloadeImage;