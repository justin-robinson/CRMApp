class Href {

  static getUrl(author) {
    if(!author.username || !author.authorId) {
      return '#';
    }
    const url = ['author', author.username
      .replace(/^@/g, '')
      .replace(/[^a-zA-Z]/g, ' ')
      .replace(/\s+/g, '-')
      .replace(/-$/, ''),
      author.authorId]
      .map(value => encodeURIComponent(value))
      .join('/');
    return `/${url}`;
  }
}

export default Href;