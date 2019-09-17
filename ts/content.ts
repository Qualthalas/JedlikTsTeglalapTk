import * as fs from "fs";
import * as http from "http";
import * as url from "url";
import { ParsedUrlQuery } from "querystring";

export default class Content {

    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        //  if (req.url === "/favicon.ico") {
        //        res.writeHead(200, { "Content-Type": "image/x-icon" });
        //        fs.createReadStream("favicon.ico").pipe(res);
        //        return;
        //  }

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        //  fejrész
        res.write("<head><title>TéglalapTk</title></head>");
        res.write("<body>");
        res.write("<h1>Téglalap területe és kerülete</h1>");

        const query: ParsedUrlQuery = url.parse(req.url, true).query;
        const a: number = 5;
        const b: number = 6;
        res.write(`<h3>a=${a}</h3>`);
        res.write(`<h3>b=${b}</h3>`);
        const terulet: number = a * b;
        const kerulet: number = 2 * (a * b);
        res.write(`<h2>T=${terulet}</h2`);
        res.write(`<h2>T=${kerulet}</h2`);

        res.write("</body>");
        res.write("</html>");
        res.end();
    }
}
