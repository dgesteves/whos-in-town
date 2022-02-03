interface SearchParam {
  key: string;
  value: string;
}

export default function createUrl(baseUrl: string, ...params: SearchParam[]) {
  const url = new URL(baseUrl);
  for (const { key, value } of params) {
    url.searchParams.set(key, value);
  }

  return url;
}
