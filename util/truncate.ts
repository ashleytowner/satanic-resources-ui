function truncate(text: string, length: number) {
  if (!text) {
    return '';
  }
  return text.slice(0, length - 3) + '...';
}

export default truncate;
