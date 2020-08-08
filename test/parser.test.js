import { parseHTML } from "../src/parser";
import assert from "assert";

describe("HTML parser", function () {
  describe("DOM structure", function () {
    it("should return -1 when the value is not present", function () {
      let document = parseHTML('<div a="bbb">hello world</div>');
      let div = document.children[0];
      console.log(document);
      assert.equal(div.tagName, "div");
      assert.equal(div.type, "element");
      assert.deepEqual(div.attributes, [
        {
          name: "a",
          value: "bbb",
        },
      ]);
    });
  });
});
