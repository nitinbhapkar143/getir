define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/doc/main.js",
    "group": "C:\\Users\\nitin\\Desktop\\Nitin\\getir\\doc\\doc\\main.js",
    "groupTitle": "C:\\Users\\nitin\\Desktop\\Nitin\\getir\\doc\\doc\\main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/api/records",
    "title": "Get Records",
    "version": "0.0.1",
    "name": "getRecords",
    "group": "Records",
    "description": "<p>Get Records.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>Mandatory start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>Mandatory end date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "minCount",
            "description": "<p>Mandatory min count.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "maxCount",
            "description": "<p>Mandatory max count.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the api.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "records",
            "description": "<p>Array of records.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the api.</p>"
          }
        ]
      }
    },
    "filename": "./src/routes/records.js",
    "groupTitle": "Records"
  }
] });
