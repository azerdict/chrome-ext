// Copyright (c) 2013 Farhad Safarov <seferov@azerdict.com>

/**
 * Create a context menu
 */
chrome.contextMenus.create({
  "title" : chrome.i18n.getMessage('translate'),
  "contexts": ["all"],
  "type" : "normal",
  "onclick" : getClickHandler()
});

/**
 * Goes to a new page (azerdict.com)
 */
function getClickHandler() {
  return function(info, tab) {

    var azerdictUrl = "http://azerdict.com/";
    var selectionText = info.selectionText;

    if (selectionText) {
      // The user selected some text, translate this
      azerdictUrl += "english/" + encodeURI(selectionText) + "?utm_source=inline-search&utm_medium=chrome&utm_campaign=chrome-ext";
    }

    // Go to the page
    chrome.tabs.create({"url" : azerdictUrl });
  };

};
