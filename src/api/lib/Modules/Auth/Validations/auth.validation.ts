import { GENDER, USER_TYPES } from 'Modules/Common/constants';

export const userRegisterValidationSchema = {
  type: 'object',
  properties: {
    _id: { type: 'string' },
    first_name: { type: 'string' },
    last_name: { type: 'string' },
    nic: { type: 'string' },
    email: { type: 'string' },
    account_type: { enum: [USER_TYPES.USER, USER_TYPES.ADMIN] },
    phone_number: { type: 'string', nullable: false },
    gender: { enum: [GENDER.MALE, GENDER.FEMALE] },
    is_deleted: { type: 'boolean' },
  },
  required: ['first_name', 'nic', 'email', 'account_type'],
  additionalProperties: false,
};

export const userLoginSchema = {
  type: 'object',
  properties: {
    username: { type: 'string' },
    password: { type: 'string' },
  },
  required: ['username', 'password'],
  additionalProperties: false,
};

/**
 *{
  "type": "object",
  "description": "the schema for order message of vct-pro-webapp",
  "properties": {
    "request_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "number"
        }
      ]
    },
    "type": {
      "const": "order_entry_request"
    },
    "symbol": {
      "enum": ["OXRP_JPY", "OBTC_JPY", "OETH_JPY"]
    },
    "order_type": {
      "enum": ["limit", "market"]
    },
    "side": {
      "enum": ["buy", "sell"]
    },
    "price": {
      "type": "number",
      "exclusiveMinimum": 0
    },
    "quantity": {
      "type": "integer",
      "minimum": 10,
      "multipleOf": 10
    },
    "vc_token": {
      "type": "string"
    }
  },
  "required": [
    "request_id",
    "type",
    "symbol",
    "order_type",
    "side",
    "price",
    "quantity",
    "vc_token"
  ],
  "additionalProperties": false
}

 */
