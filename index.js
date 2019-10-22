/**
 * @author Ricardo Veronese Ricci
 * @copyright 2016-2019 Jobin S.L.
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

function getOrderType(code) {
    switch (code) {
        case "220":
            return "Order";
        case "221":
            return "Blanket order";
        case "224":
            return "Rush order";
        case "225":
            return "Repair order";
        case "226":
            return "Call off order";
        case "227":
            return "Consignment order";
        case "22E":
            return "Manufacturer raised order (GS1 Temporary Code)";
        case "23E":
            return "Manufacturer raised consignment order (GS1 Temporary Code)";
        case "258":
            return "Standing order";
        case "237":
            return "Cross docking services order";
        case "400":
            return "Exceptional order";
        case "401":
            return "Transshipment order";
        case "402":
            return "Cross docking order";
        default:
            break;
    }
}

function getDateType(code) {
    switch (code) {
        case "2":
            return "Delivery date/time, requested";
        case "10":
            return "Shipment date/time, requested";
        case "11":
            return "Despatch date and/or time";
        case "15":
            return "Promotion start date/time";
        case "37":
            return "Ship not before date/time";
        case "38":
            return "Ship not later than date/time";
        case "61":
            return "Cancel if not delivered by this date";
        case "63":
            return "Delivery date/time, latest";
        case "64":
            return "Delivery date/time, earliest";
        case "69":
            return "Delivery date/time, promised for";
        case "76":
            return "Delivery date/time, scheduled for";
        case "X14":
            return "Requested for delivery week commencing (GS1 Temporary Code)";
        case "137":
            return "Document/message date/time";
        case "200":
            return "Pick-up/collection date/time of cargo";
        case "235":
            return "Collection date/time, latest";
        case "263":
            return "Invoicing period";
        case "273":
            return "Validity period";
        case "282":
            return "Confirmation date lead time";
        case "383":
            return "Cancel if not shipped by this date";
        default:
            break;
    }
}

function getMRefType(code) {
    switch (code) {
        case "AAB":
            return "Proforma invoice number";
        case "AAJ":
            return "Delivery order number";
        case "AAK":
            return "Despatch advice number";
        case "AFO":
            return "Beneficiary's reference";
        case "ALL":
            return "Message batch number";
        case "AIZ":
            return "Consolidated invoice number";
        case "AMT":
            return "Goods and Services Tax identification number";
        case "APQ":
            return "Commercial account summary reference number";
        case "CD":
            return "Credit note number";
        case "CR":
            return "Customer reference number";
        case "DL":
            return "Debit note number";
        case "DQ":
            return "Delivery note number";
        case "IV":
            return "Invoice number";
        case "ON":
            return "Order number (buyer)";
        case "PL":
            return "Price list number";
        case "RF":
            return "Export reference number";
        case "VN":
            return "Order number (supplier)";
        default:
            break;
    }
}

function getRefType(code) {
    switch (code) {
        case "ADE":
            return "Account number";
        case "ALV":
            return "Registered capital reference";
        case "AP":
            return "Accounts receivable number";
        case "AMT":
            return "Goods and Services Tax identification number";
        case "YC1":
            return "Additional party identification (GS1 Temporary Code)";
        case "EX":
            return "Export licence number";
        case "FC":
            return "Fiscal number";
        case "CR":
            return "Customer reference number";
        case "GN":
            return "Government reference number";
        case "IA":
            return "Internal vendor number";
        case "IP":
            return "Import licence number";
        case "IT":
            return "Internal customer number";
        case "PY":
            return "Payee's financial institution account number";
        case "SZ":
            return "Specification number";
        case "TRB":
            return "Tribunal place registration number (GS1 Temporary Code)";
        case "VA":
            return "VAT registration number";
        case "XA":
            return "Company/place registration number";
        case "AQQ":
            return "Activite Principale Exercee (APE) identifier";
        case "ATB":
            return "Purchase for export Customs agreement number";
        default:
            break;
    }
}

function getNameAddressType(code) {
    switch (code) {
        case "BO":
            return "Broker or sales office";
        case "BS":
            return "Bill and ship to";
        case "BY":
            return "Buyer";
        case "CN":
            return "Consignee";
        case "CS":
            return "Consolidator";
        case "DP":
            return "Delivery party";
        case "II":
            return "Issuer of invoice";
        case "IV":
            return "Invoicee";
        case "LD":
            return "Party recovering the Value Added Tax (VAT)";
        case "PE":
            return "Payee";
        case "RE":
            return "Party to receive commercial invoice remittance";
        case "SE":
            return "Seller";
        case "SR":
            return "Supplier's agent/representative";
        case "SN":
            return "Store number";
        case "ST":
            return "Ship to";
        case "SU":
            return "Supplier";
        case "LC":
            return "Party declaring the Value Added Tax (VAT)";
        default:
            break;
    }
}

function getControlTotalType(code) {
    switch (code) {
        case "1":
            return "Total value of the quantity segments at line level in a message";
        case "2":
            return "Number of line items in message";
        case "7":
            return "Total gross weight";
        case "29":
            return "Total net weight of consignment";
        case "15":
            return "Total consignment, cube";
        default:
            break;
    }
}

function getProductType(code) {
    switch (code) {
        case "1":
            return "Additional identification";
        case "2":
            return "Identification for potential substitution";
        case "4":
            return "Substituted for";
        case "5":
            return "Product identification";
        case "X1":
            return "No substitution accepted (GS1 Code)";
        default:
            break;
    }
}

function getItemType(code) {
    switch (code) {
        case "AC":
            return "HIBC (Health Industry Bar Code)";
        case "DW":
            return "Drawing";
        case "IB":
            return "ISBN (International Standard Book Number)";
        case "IN":
            return "Buyer's item number";
        case "SA":
            return "Supplier's article number";
        case "SRV":
            return "GS1 Global Trade Item Number";
        case "EWC":
            return "European Waste Catalogue (GS1 code)";
        case "UA":
            return "Ultimate customer's article number";
        default:
            break;
    }
}

function getQuantityType(code) {
    switch (code) {
        case "1":
            return "Discrete quantity";
        case "12":
            return "Despatch quantity";
        case "21":
            return "Ordered quantity";
        case "46":
            return "Delivered quantity";
        case "59":
            return "Number of consumer units in the traded unit";
        case "47":
            return "Invoiced quantity";
        case "61":
            return "Return quantity";
        case "192":
            return "Free goods quantity";
        case "194":
            return "Received and accepted";
        case "39E":
            return "Minimum invoicing quantity (GS1 Temporary Code)";
        case "45E":
            return "Number of units in higher packaging or configuration level (GS1 Temporary Code)";
        default:
            break;
    }
}

function getPriceType(code) {
    switch (code) {
        case "AAA":
            return "Calculation net (The price stated is the net price including all allowances and charges and excluding taxes. Allowances and charges may be stated for information purposes only.)";
        case "AAB":
            return "Calculation gross (AAB - The price stated is the gross price excluding all allowances, charges and taxes. Allowances and charges must be stated for net calculation purposes.)";
        case "AAE":
            return "Information price, excluding allowances or charges, including taxes";
        case "AAF":
            return "Information price, excluding allowances or charges and taxes";
        case "AAH":
            return "Subject to escalation and price adjustment, use this when dealing with CSA (customer specific articles).";
        case "AAQ":
            return "Firm price, use this when dealing with CSA (customer specific articles).";
        case "ABL":
            return "Base price, use this when dealing with CSA (customer specific articles).";
        case "ABM":
            return "Base price difference, use this when dealing with CSA (customer specific articles).";
        default:
            break;
    }
}

function getPriceTypeCode(code) {
    switch (code) {
        case "CA":
            return "Catalogue";
        case "CT":
            return "Contract";
        default:
            break;
    }
}

function getPriceSpecificationCode(code) {
    switch (code) {
        case "DPR":
            return "Discount price";
        case "PPR":
            return "Provisional price";
        case "PRP":
            return "Promotional price";
        case "RTP":
            return "Retail price";
        case "SRP":
            return "Suggested retail price";
        default:
            break;
    }
}

var EDI = function(string) {
    this.string = string;
};

/* type transformations */
EDI.prototype.toString = function() {
    return "" + this.string;
};

EDI.prototype.toNumber = function() {
    return parseFloat(this.toString());
};

EDI.prototype.toDate = function() {
    return new Date(this.string);
};

EDI.prototype.valueOf = function() {
    return this.string;
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

// EDI parse lines, return documents lines starting with certain token
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
    let segments = this.string.split(token);
    segments = segments.splice(1, segments.length);
    segments = segments.map(function(text) {
        const segment = text.split("'");
        return new EDI(token + segment[0]);
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

// extract batches from EDI message
EDI.prototype.bsegments = function() {
    var bsegments = this.string.match(/UNB\+.*?UNZ\+[^\']+?/g);
    bsegments = bsegments.map(function(segment) {
        return new EDI(segment);
    });
    return bsegments;
};

// extract messages
EDI.prototype.msegments = function() {
    var msegments = this.string.match(/UNH\+.*?UNT\+[^\']+?/g);
    msegments = msegments.map(function(segment) {
        return new EDI(segment);
    });
    return msegments;
};

// formats date, adds hyphen to separate, resulting in YYYY-MM-DD
// assuming the string comes from a date source
EDI.prototype.formatDate = function() {
    return new Date(this.string.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"));
};

/* Batch specific functions */
// TODO: FIX THE FUNCTION NAMES
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
EDI.prototype.oref = function() {
    return this.segment("BGM")
        .element(2)
        .toString();
};
EDI.prototype.mproduct = function() {
    return this.segment("MKS")
        .element(1)
        .toString();
};

/* message specific functions */
EDI.prototype.idFrom = function() {
    return this.segment("UNB")
        .element(2)
        .component(0)
        .toString();
};
EDI.prototype.idTo = function() {
    return this.segment("UNB")
        .element(3)
        .component(0)
        .toString();
};
EDI.prototype.orderCode = function() {
    return this.segment("BGM")
        .element(1)
        .component(0)
        .toString();
};
EDI.prototype.orderType = function() {
    const code = this.segment("BGM")
        .element(1)
        .component(0)
        .toString();

    return getOrderType(code);
};
EDI.prototype.orderRef = function() {
    return this.segment("BGM")
        .element(2)
        .toString();
};
EDI.prototype.dateCode = function() {
    return this.segment("DTM")
        .element(1)
        .component(0)
        .toString();
};
EDI.prototype.dateType = function() {
    const code = this.segment("DTM")
        .element(1)
        .component(0)
        .toString();

    return getDateType(code);
};
EDI.prototype.mDate = function() {
    return this.segment("DTM+137")
        .element(1)
        .component(1)
        .formatDate();
};
EDI.prototype.deliveryTimeEarliest = function() {
    return this.segment("DTM+64")
        .element(1)
        .component(1)
        .formatDate();
};
EDI.prototype.deliveryTimeLatest = function() {
    return this.segment("DTM+63")
        .element(1)
        .component(1)
        .formatDate();
};
EDI.prototype.deliveryDaysRange = function() {
    const time =
        this.deliveryTimeLatest().getTime() -
        this.deliveryTimeEarliest().getTime();

    return time / (1000 * 3600 * 24);
};
EDI.prototype.deliveryTimeRange = function() {
    return (
        this.deliveryTimeLatest().getTime() -
        this.deliveryTimeEarliest().getTime()
    );
};
EDI.prototype.mrefCode = function() {
    return this.segment("RFF")
        .element(1)
        .component(0)
        .toString();
};
EDI.prototype.mrefType = function() {
    const code = this.segment("RFF")
        .element(1)
        .component(0)
        .toString();

    return getMRefType(code);
};
EDI.prototype.mref = function() {
    return this.segment("RFF")
        .element(1)
        .component(1)
        .toString();
};
EDI.prototype.refCode = function() {
    const segments = this.segments("RFF");
    const length = segments.length;
    return segments[length - 1]
        .element(2)
        .component(0)
        .toString();
};
EDI.prototype.refType = function() {
    const segments = this.segments("RFF");
    const length = segments.length;
    const code = segments[length - 1]
        .element(2)
        .component(0)
        .toString();

    return getRefType(code);
};
EDI.prototype.ref = function() {
    const segments = this.segments("RFF");
    const length = segments.length;
    return segments[length - 1]
        .element(1)
        .component(1)
        .toString();
};
EDI.prototype.refVAT = function() {
    return this.segment("RFF+VAT")
        .component(1)
        .toString()
        .replace("?", "")
        .toString();
};
// TODO: check this
EDI.prototype.refs = function() {
    return this.segments("RFF");
};
EDI.prototype.nameAddressesType = function() {
    const refs = this.segments("NAD").map(seg => {
        return getNameAddressType(
            seg
                .element(1)
                .component(0)
                .toString()
        );
    });

    return refs;
};
EDI.prototype.naBuyer = function() {
    return this.segment("NAD+BY")
        .element(2)
        .component(0)
        .toString();
};
EDI.prototype.naSupplier = function() {
    return this.segment("NAD+SU")
        .element(2)
        .component(0)
        .toString();
};
EDI.prototype.naDeliveryParty = function() {
    return this.segment("NAD+DP")
        .element(2)
        .component(0)
        .toString();
};
EDI.prototype.naMessageReceiver = function() {
    return this.segment("NAD+MR")
        .element(2)
        .component(0)
        .toString();
};
EDI.prototype.naInvoicee = function() {
    return this.segment("NAD+IV")
        .element(2)
        .component(0)
        .toString();
};
EDI.prototype.naInvoiceeAddress1 = function() {
    return this.segment("NAD+IV")
        .element(3)
        .component(0)
        .toString();
};
EDI.prototype.naInvoiceeAddress2 = function() {
    return this.segment("NAD+IV")
        .element(4)
        .component(0)
        .toString();
};
EDI.prototype.naInvoiceeAddressCity = function() {
    return this.segment("NAD+IV")
        .element(5)
        .component(0)
        .toString();
};
EDI.prototype.naInvoiceeAddressPostalCode = function() {
    return this.segment("NAD+IV")
        .element(6)
        .component(0)
        .toString();
};
EDI.prototype.naInvoiceeAddressCountry = function() {
    return this.segment("NAD+IV")
        .element(7)
        .component(0)
        .toString();
};
EDI.prototype.nameAdresses = function() {
    return this.segments("NAD");
};
EDI.prototype.currency = function() {
    return this.segment("CUX")
        .element(1)
        .component(1)
        .toString();
};
/* group product by lines */
EDI.prototype.productLines = function() {
    return this.segments("LIN");
};
EDI.prototype.productsType = function(lineNumber) {
    const codes = this.segments("PIA");

    if (lineNumber)
        return getProductType(codes[lineNumber].element(1).toString());
    else return codes.map(code => getProductType(code.element(1).toString()));
};
EDI.prototype.productsID = function(lineNumber) {
    const segents = this.segments("PIA");

    if (lineNumber)
        return segents[lineNumber]
            .element(2)
            .component(0)
            .toString();
    else
        return segents.map(segment =>
            code
                .element(2)
                .component(0)
                .toString()
        );
};
EDI.prototype.itemsType = function(lineNumber) {
    const codes = this.segments("PIA");

    if (lineNumber)
        return getItemType(
            codes[lineNumber]
                .element(2)
                .component(1)
                .toString()
        );
    else
        return codes.map(code =>
            getItemType(
                code
                    .element(2)
                    .component(1)
                    .toString()
            )
        );
};
EDI.prototype.productsQtyType = function(lineNumber) {
    const codes = this.segments("QTY");

    if (lineNumber)
        return getQuantityType(
            codes[lineNumber]
                .elmement(1)
                .component(0)
                .toString()
        );
    else
        return codes.map(code =>
            getQuantityType(
                code
                    .element(1)
                    .component(0)
                    .toString()
            )
        );
};
EDI.prototype.productsQty = function(lineNumber) {
    const segments = this.segments("QTY");

    if (lineNumber)
        return segments[lineNumber]
            .elmement(1)
            .component(1)
            .toString();
    else
        return segments.map(segment =>
            segment
                .element(1)
                .component(1)
                .toString()
        );
};
EDI.prototype.productsPriceType = function(lineNumber) {
    const codes = this.segments("PRI");

    if (lineNumber)
        return getPriceType(
            codes[lineNumber]
                .elmement(1)
                .component(0)
                .toString()
        );
    else
        return codes.map(code =>
            getPriceType(
                code
                    .element(1)
                    .component(0)
                    .toString()
            )
        );
};
// not on use
EDI.prototype.productsPriceTypeCode = function(lineNumber) {
    const codes = this.segments("PRI");

    if (lineNumber)
        return getPriceTypeCode(
            codes[lineNumber]
                .elmement(1)
                .component(0)
                .toString()
        );
    else
        return codes.map(code =>
            getPriceTypeCode(
                code
                    .element(1)
                    .component(0)
                    .toString()
            )
        );
};
// not on use
EDI.prototype.productsPriceSpecificationCode = function(lineNumber) {
    const codes = this.segments("PRI");

    if (lineNumber)
        return getPriceSpecificationCode(
            codes[lineNumber]
                .elmement(1)
                .component(0)
                .toString()
        );
    else
        return codes.map(code =>
            getPriceSpecificationCode(
                code
                    .element(1)
                    .component(0)
                    .toString()
            )
        );
};
EDI.prototype.productsPrice = function(lineNumber) {
    const segments = this.segments("PRI");

    if (lineNumber)
        return segments[lineNumber]
            .elmement(1)
            .component(1)
            .toString();
    else
        return segments.map(segment =>
            segment
                .element(1)
                .component(1)
                .toString()
        );
};
/* product logic ends here */
EDI.prototype.summarySeparator = function() {
    return this.segment("UNS").toString();
};
EDI.prototype.controlTotalType = function() {
    const code = this.segment("CNT")
        .element(1)
        .component(0)
        .toString();

    return getControlTotalType(code);
};
EDI.prototype.controlTotal = function() {
    return this.segment("CNT")
        .element(1)
        .component(1)
        .toString();
};
EDI.prototype.segmentQty = function() {
    return this.segment("UNT")
        .element(1)
        .component(0)
        .toString();
};
EDI.prototype.documentEnd = function() {
    return this.segment("UNZ")
        .element(1)
        .component(0)
        .toString();
};

// Aliases
EDI.prototype.e = EDI.prototype.elem = EDI.prototype.element;
EDI.prototype.c = EDI.prototype.comp = EDI.prototype.component;
EDI.prototype.s = EDI.prototype.str = EDI.prototype.toString;
EDI.prototype.n = EDI.prototype.num = EDI.prototype.toNumber;
EDI.prototype.d = EDI.prototype.date = EDI.prototype.toDate;

exports = module.exports = EDI;
