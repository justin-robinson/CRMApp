class Href {

  static getTitle(post) {
    return post.title || 'No Title';
  }

  static getUrl(post) {
    const title = this.getTitle(post);
    return [title
      .replace(/[^a-zA-Z]/g, ' ')
      .replace(/\s+/g, '-')
      .replace(/-$/, '')
      , post.postId]
      .map(value => encodeURIComponent(value))
      .join('/');
  }
}

export default Href;