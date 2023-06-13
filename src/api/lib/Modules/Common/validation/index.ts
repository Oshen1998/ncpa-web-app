import Ajv from 'ajv';

const ajv = new Ajv();

export const ValidateSchema = (schema: any, data: any) => {
  const validate = ajv.compile(schema);
  const isValid = validate(data);
  return isValid;
};
