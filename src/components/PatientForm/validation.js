import { object, string } from 'yup';

const schema = object().shape({
  name: string().required('Name is required').max(50, 'Name must be at most 50 characters'),
  description: string().required('Description is required'),
  website: string().url('Website must be a valid URL').nullable()
});

export default schema;