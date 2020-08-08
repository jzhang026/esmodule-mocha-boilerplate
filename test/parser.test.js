import { parseHTML, EOF } from "../src/parser";
import { expect } from "chai";

describe("HTML parser", function () {
  describe("DOM structure", function () {
    it("dom element", function () {
      let document = parseHTML('<div a="bbb">hello world</div>');
      let div = document.children[0];
      console.log(document);
      expect(div.tagName).to.equal("div");
      expect(div.type).to.equal("element");
    });

    it("self closing tag", function () {
      let document = parseHTML(`<img a="bbb" />`);
      let div = document.children[0];
      console.log(document);
      expect(div.tagName).to.equal("img");
      expect(div.type).to.equal("element");
      document = parseHTML(`<img/>`);
      div = document.children[0];
      console.log(document);
      expect(div.tagName).to.equal("img");
    });
    it("dummy tag", function () {
      let document = parseHTML("</>");
      let div = document.children[0];
      console.log(document);
      expect(div).to.equal(undefined);
    });
  });
  describe("attributes", function () {
    it("single quted", function () {
      let document = parseHTML("<div  a= 'bbb'>hello world</div>");
      let div = document.children[0];
      expect(div.attributes).to.deep.equal([
        {
          name: "a",
          value: "bbb",
        },
      ]);
    });

    it("double quted", function () {
      let document = parseHTML('<div a="bbb" >hello world</div>');
      let div = document.children[0];
      expect(div.attributes).to.deep.equal([
        {
          name: "a",
          value: "bbb",
        },
      ]);
    });

    it("attribute name of equal sign", function () {
      let document = parseHTML('<div = aa="bbb"> hello world</div>');
      let div = document.children[0];
      expect(div.attributes).to.deep.equal([
        {
          name: "aa",
          value: "bbb",
        },
      ]);
    });

    it("unquted", function () {
      let document = parseHTML("<div a=bbb >hello world</div>");
      let div = document.children[0];
      expect(div.attributes).to.deep.equal([
        {
          name: "a",
          value: "bbb",
        },
      ]);
    });
  });
});
