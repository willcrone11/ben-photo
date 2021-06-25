import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: "2pvrefrb",
  dataset: "production",
  apiVersion: '2021-06-24',
  useCdn: false
})