class Href {

  static getTitle(post) {
    if(!post || !post.title){
      return 'No Title'
    }
    return post.title;
  }

  static getUrl(post) {
    if (!post) {
      return '#';
    }
    const title = this.getTitle(post);
    const url = [title
      .replace(/[^a-zA-Z]/g, ' ')
      .replace(/\s+/g, '-')
      .replace(/-$/, '')
      , post.postId]
      .map(value => encodeURIComponent(value))
      .join('/');
    return `/${url}`;
  }
}

export default Href;