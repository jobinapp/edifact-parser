#edifact-parser
EDIFACT parser based on the edi npm package, focused on ease of use and code legibility

##Instalation
Use npm to install edifact-parser

```bash
npm install edifact-parser
```

##Usage

```javascript
const EDI = require("edifact-parser");
const doc = new EDI("edifact document here...");
const segments = doc.bsegments();
const messages = doc.msegments();
const mbatch = messages[0];
const sbatch = segments[0];
```

##Methods
###messages
```javascript
mbatch.mid(); // UNH first element
mbatch.mtype(); // UNH second element, zero component
mbatch.msubtype(); // BGM first element, zero component
mbatch.oref(); // BGM second element
mbatch.mproduct(); // MKS first element
```

###segments
####UNB
```javascript
sbatch.idFrom();
sbatch.idTo();
```

####BGM
```javascript
sbatch.orderCode();
sbatch.orderType();
sbatch.orderRef();
```

####DTM
```javascript
sbatch.dateCode();
sbatch.dateType();
sbatch.deliveryTime();
sbatch.deliveryTimeEarliest();
sbatch.deliveryTimeLatest();
sbatch.deliveryDaysRange();
sbatch.deliveryTimeRange();
```

####RFF
```javascript
sbatch.mrefCode();
sbatch.mrefType();
sbatch.mref();
sbatch.refCode();
sbatch.refType();
sbatch.ref();
sbatch.refVAT();
sbatch.refs();
```

####NAD
```javascript
sbatch.nameAddressesType();
sbatch.naBuyer();
sbatch.naSupplier();
sbatch.naDeliveryParty();
sbatch.naMessageReceiver();
sbatch.naInvoicee();
sbatch.naInvoiceeAddress1();
sbatch.naInvoiceeAddress2();
sbatch.naInvoiceeAddressCity();
sbatch.naInvoiceeAddressPostalCode();
sbatch.naInvoiceeAddressCountry();
sbatch.nameAdresses();
```

####CUH
```javascript
sbatch.currency();
```

####UNS
```javascript
sbatch.summarySeparator();
```

####CNT
```javascript
sbatch.controlTotalType();
sbatch.controlTotal();
```

####UNT
```javascript
sbatch.segmentQty();
```

####UNZ
```javascript
sbatch.documentEnd();
```

###Product(s) information
methods return a list by default, returns a single element if an int param is defined (zero-based)
####LIN
```javascript
sbatch.productLines();
```

####PIA
```javascript
sbatch.productsType();
sbatch.productsID();
sbatch.itemsType();
```

####QTY
```javascript
sbatch.productsQtyType();
sbatch.productsQty();
```

####PRI
```javascript
sbatch.productsPriceType();
sbatch.productsPriceTypeCode();
sbatch.productsPriceSpecificationCode();
sbatch.productsPrice();
```
