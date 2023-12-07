export const checkPostOnTag = (post: string[]) => {
  const tags = post.map((item) => {
    const index = item.indexOf('#');
    if (index !== -1) {
      return item.substring(index);
    }
    return null;
  }).filter((tag) => tag !== null);
  return tags;
};