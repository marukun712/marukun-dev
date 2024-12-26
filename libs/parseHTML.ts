import parse from "html-react-parser";

export default function parseHTML(html: string) {
  return parse(html);
}
