var CLOUD_ACCESS_TOKEN_NAME = 'ss_cloud_access_token';
var CLOUD_USER_NAME = 'ss_cloud_user_name';
var $cloudToken = localStorage.getItem(CLOUD_ACCESS_TOKEN_NAME);
var $cloudUserName = localStorage.getItem(CLOUD_USER_NAME);

var cloud = _.extend(axios.create({
  baseURL: 'https://api.sscms.com/v7',
  headers: {
    Authorization: "Bearer " + $cloudToken,
  },
}), {
  host: 'https://sscms.com',
  hostImages: 'https://images.sscms.com',
  hostDl: 'https://dl.sscms.com',
  hostDemo: 'https://demo.sscms.com',
  hostStorage: 'https://storage.sscms.com',

  getDocsUrl: function(relatedUrl) {
    return this.host + '/docs/v7/' + relatedUrl;
  },

  getPluginIconUrl: function (plugin) {
    if (!plugin.icon) return utils.getAssetsUrl('images/favicon.png');
    if (plugin.success && !plugin.disabled) {
      return plugin.icon;
    }
    return this.hostStorage + '/plugins/' + plugin.pluginId + '/logo' + plugin.icon.substring(plugin.icon.lastIndexOf('.'));
  },

  getPluginsUrl: function(relatedUrl) {
    return this.host + '/plugins/' + relatedUrl;
  },

  getExtensions: function(cmsVersion, word) {
    return this.post('cms/extensions', {
      cmsVersion: cmsVersion,
      word: word
    });
  },

  getExtension: function(cmsVersion, userName, name) {
    return this.post('cms/extensions/actions/getExtension', {
      cmsVersion: cmsVersion,
      userName: userName,
      name: name
    }).catch(function (error) {
      if (error.response && error.response.status === 404) {
        utils.error('找不到资源，请重试或者检查计算机是否能够连接外网');
      } else {
        throw error;
      }
    });
  },

  getThemesUrl: function(relatedUrl) {
    return this.host + '/templates/' + relatedUrl;
  },

  getThemes: function(page, word, tag, price, order) {
    return this.get('cms/themes', {
      params: {
        page: page,
        word: word,
        tag: tag,
        price: price,
        order: order
      }
    });
  },

  getUpdates: function(cmsVersion, pluginIds) {
    return this.post('cms/extensions/actions/getUpdates', {
      cmsVersion: cmsVersion,
      pluginIds: pluginIds
    });
  },

  compareVersion: function (currentVersion, newVersion, options) {
    var v1 = (currentVersion || "").split("-")[0];
    var v2 = (newVersion || "").split("-")[0];
    // var v1 = (currentVersion || '').replace(/[^0-9\.]+/g, ".");
    // var v2 = (newVersion || '').replace(/[^0-9\.]+/g, ".");

    var lexicographical = options && options.lexicographical,
      zeroExtend = options && options.zeroExtend,
      v1parts = v1.split("."),
      v2parts = v2.split(".");

    function isValidPart(x) {
      return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(x);
    }

    if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
      return NaN;
    }

    if (zeroExtend) {
      while (v1parts.length < v2parts.length) v1parts.push("0");
      while (v2parts.length < v1parts.length) v2parts.push("0");
    }

    if (!lexicographical) {
      v1parts = v1parts.map(Number);
      v2parts = v2parts.map(Number);
    }

    for (var i = 0; i < v1parts.length; ++i) {
      if (v2parts.length == i) {
        return 1;
      }

      if (v1parts[i] == v2parts[i]) {
        continue;
      } else if (v1parts[i] > v2parts[i]) {
        return 1;
      } else {
        return -1;
      }
    }

    if (v1parts.length != v2parts.length) {
      return -1;
    }

    //1 >, -1 <, 0 ==
    return 0;
  },

  // cloud authentication

  isAuth: function() {
    return ($cloudToken && $cloudUserName) ? true : false;
  },

  logout: function() {
    localStorage.removeItem(CLOUD_USER_NAME);
    localStorage.removeItem(CLOUD_ACCESS_TOKEN_NAME);
  },

  login: function(userName, token) {
    if (userName && token) {
      localStorage.setItem(CLOUD_USER_NAME, userName);
      localStorage.setItem(CLOUD_ACCESS_TOKEN_NAME, token);
    } else {
      this.logout();
    }
  },

  checkAuth: function(callback, url) {
    if (!this.isAuth()) {
      var redirect = url || location.href;
      location.href = utils.getCloudsUrl('connect', {redirect: redirect});
    } else if (callback) {
      callback();
    }
  },
});
