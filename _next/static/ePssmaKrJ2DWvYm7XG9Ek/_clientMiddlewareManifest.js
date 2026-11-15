self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/HitBox\\.github\\.io(?:\\/(_next\\/data\\/[^/]{1,}))?\\/profil(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/profil/:path*"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()