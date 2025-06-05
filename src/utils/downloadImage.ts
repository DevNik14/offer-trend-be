import { DownloaderHelper } from "node-downloader-helper";

const imageDestination = "../../storage/images";

const items = [{
  "name": "CHEF CARLO",
  "description": "Грах",
  "unitPrice": "0,99",
  "basePrice": "1 кг = 2,48",
  "image": "https://kaufland.media.schwarz/is/image/schwarz/3800501186572_BG_P"
},
{
  "name": "Земел бял",
  "description": "от нашата пекарна",
  "unitPrice": "0,09",
  "basePrice": "1 кг = 1,50",
  "image": "https://kaufland.media.schwarz/is/image/schwarz/157_00021453_P"
},
{
  "name": "Ayco",
  "description": "Машина за сушене на плодове",
  "unitPrice": "34,99",
  "basePrice": "",
  "image": "https://kaufland.media.schwarz/is/image/schwarz/1044340000008_BG_P"
}]

const downloadeImage = (url: string) => {
  const createImageName = url.split("/").slice(-1)[0] += ".webp";
  const dl = new DownloaderHelper(url, "D:\\DevFolder\\offer-trend-be\\storage\\images", {
    fileName: createImageName,
    override: { skip: true }
  });

  dl.on('end', () => console.log('Download Completed'));
  dl.on('error', (err) => console.log('Download Failed', err));
  dl.start().catch(err => console.error(err));
}

export default downloadeImage;