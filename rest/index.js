import { parse } from 'url';
import { readdir, readFile } from 'mz/fs';
import Promise from 'bluebird';

const getAll = /^\/brewerydb\/breweries$/;
const getOne = /^\/brewerydb\/breweries\/(\w+)$/;
const getBeers = /^\/brewerydb\/breweries\/(\w+)\/beers$/;

export default function breweryDbMiddleware(req, res, next) {
  const url = parse(req.url);

  perform(req.method, url.path)
    .then((result) => {
      if(result === null) {
        next();
      } else {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(result);
      }
    })
    .catch((error) => {
      console.log('Something went wrong', error);
    });

}

async function perform(method, path) {
  if(method === 'GET') {
    if(getAll.test(path)) {
      const fileNames = await readdir('rest/breweries');
      const filePromises = fileNames.map(fileName => readFile(`rest/breweries/${fileName}`));
      const files = await Promise.all(filePromises);
      const result = files.map(file => JSON.parse(file));
      return JSON.stringify(result);
    } else if(getOne.test(path)) {
      const id = getOne.exec(path)[1];
      return (await readFile(`rest/breweries/${id}.json`)).toString();
    } else if(getBeers.test(path)) {
      const id = getBeers.exec(path)[1];
      return (await readFile(`rest/beers/${id}.json`)).toString();
    }
  }

  return null;
}
