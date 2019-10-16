/**
 * @author Ricardo Veronese Ricci
 * @copyright 2019 Jobin S.L.
 * @license MIT
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 * inspired by: https://github.com/nabudaldah/EDI
 */

var EDI = function(string) {
    this.string = string;
};

/* Generic EDIFACT functions */

// EDI parse lines, return all document lines or a specific one
EDI.prototype.lines = function(n, format = "edi") {
    var lines = this.string.split(/['\n\r]+/);
    lines = lines.map(function(line) {
        if (format === "edi") return new EDI(line);
        else return line;
    });
    if (n || n === 0) return lines[n];
    else return lines;
};

EDI.prototype.lineSegment = function(token, format = "edi") {
    let result = [];
    const lines = this.string.split(/['\n\r]+/);
    lines.map(function(line) {
        if (line.startsWith(token)) {
            if (format === "edi") return result.push(new EDI(line));
            else return result.push(line);
        }
    }, []);

    return result;
};

// EDI parse segments
EDI.prototype.segments = function(token) {
    var segments = this.string.split(token);
    segments = segments.splice(1, segments.length);
    segments = segments.map(function(text) {
        return new EDI(token + text);
    });
    return segments;
};

// search for segment
EDI.prototype.segment = function(token) {
    var esc = token.replace("+", "\\+");
    var search = new RegExp(esc + "+[^']+", "g");
    var segment = search.exec(this.string);
    if (!segment || !segment[0]) segment = "";
    else segment = "" + segment[0];
    return new EDI(segment);
};

// return n'th element (zero-index)
EDI.prototype.element = function(n) {
    // var elements = this.string.split('+');
    // split while handling escape characters: credits: http://stackoverflow.com/a/14334054
    var elements = this.string.match(/(\?.|[^\+])+/g);
    var element = "";
    if (!elements || n > elements.length - 1) element = "";
    else element = elements[n];
    return new EDI(element);
};

// return n'th component (zero-index)
EDI.prototype.component = function(n) {
    // var components = this.string.split(':');
    // split while handling escape characters: credits: http://stackoverflow.com/a/14334054
    var components = this.string.match(/(\?.|[^:])+/g);
    var component = "";
    if (!components || n > components.length - 1) component = "";
    else component = components[n];
    return new EDI(component);
};

EDI.prototype.toString = function() {
    return "" + this.string;
};

EDI.prototype.toNumber = function() {
    return parseFloat(this.toString());
};

EDI.prototype.toDate = function() {
    return new Date(this.string());
};

EDI.prototype.valueOf = function() {
    return this.string;
};

// Extract batches from EDI message
EDI.prototype.bsegments = function() {
    var bsegments = this.string.match(/UNB\+.*?UNZ\+[^\']+?/g);
    bsegments = bsegments.map(function(segment) {
        return new EDI(segment);
    });
    return bsegments;
};

// Extract messages
EDI.prototype.msegments = function() {
    var msegments = this.string.match(/UNH\+.*?UNT\+[^\']+?/g);
    msegments = msegments.map(function(segment) {
        return new EDI(segment);
    });
    return msegments;
};

/* Batch specific functions */
EDI.prototype.bfrom = function() {
    return this.segment("UNB")
        .element(2)
        .component(0)
        .toString();
};
EDI.prototype.bto = function() {
    return this.segment("UNB")
        .element(3)
        .component(0)
        .toString();
};
EDI.prototype.btime = function() {
    return this.segment("UNB")
        .element(4)
        .toString();
};
EDI.prototype.bisotime = function() {
    return this.btime().toDate();
};

/* Message specific functions */
EDI.prototype.mid = function() {
    return this.segment("UNH")
        .element(1)
        .toString();
};
EDI.prototype.mtype = function() {
    return this.segment("UNH")
        .element(2)
        .component(0)
        .toString();
};
EDI.prototype.msubtype = function() {
    return this.segment("BGM")
        .element(1)
        .component(0)
        .toString();
};
EDI.prototype.mref = function() {
    return this.segment("BGM")
        .element(2)
        .toString();
};
EDI.prototype.mfrom = function() {
    return this.segment("NAD+MS")
        .element(2)
        .component(0)
        .toString();
};
EDI.prototype.mto = function() {
    return this.segment("NAD+MR")
        .element(2)
        .component(0)
        .toString();
};
EDI.prototype.mproduct = function() {
    return this.segment("MKS")
        .element(1)
        .toString();
};
EDI.prototype.mtime = function() {
    return this.segment("DTM+137")
        .element(1)
        .component(1)
        .toString();
};
EDI.prototype.ltime = function() {
    return this.segment("DTM+63")
        .element(1)
        .component(1)
        .toString();
};
EDI.prototype.etime = function() {
    return this.segment("DTM+64")
        .element(1)
        .component(1)
        .toString();
};
EDI.prototype.moffset = function() {
    return this.segment("DTM+735")
        .component(1)
        .toString()
        .replace("?", "")
        .toString();
};
EDI.prototype.referenceVAT = function() {
    return this.segment("RFF+VAT")
        .component(1)
        .toString()
        .replace("?", "")
        .toString();
};
EDI.prototype.deliveryTimeRange = function() {
    return new Date(this.deliveryTimeEarliest() - this.deliveryTimeLatest());
};

// Aliases
EDI.prototype.e = EDI.prototype.elem = EDI.prototype.element;
EDI.prototype.c = EDI.prototype.comp = EDI.prototype.component;
EDI.prototype.s = EDI.prototype.str = EDI.prototype.toString;
EDI.prototype.n = EDI.prototype.num = EDI.prototype.toNumber;
EDI.prototype.d = EDI.prototype.date = EDI.prototype.toDate;

exports = module.exports = EDI;
