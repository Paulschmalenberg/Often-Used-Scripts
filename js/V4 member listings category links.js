/**
 * @title V4 member listings category links
 * @description Sets the Category Listings on Member Directory Linkings to be links
 * @author paul.schmalenberg@growthzone.com
 * @labels js v4
 * @software version cm
 * @ticket 000-000-00000
 */

/*
This only works on V4 Modules, there is 2 sections a header and footer
You need to have QuickLinks and Categories setup as it works by grabbing the category dropdown off the /list or /member page
*/

// Header
// returns true or false if the passed in string matches the current url path
function isPath (path) {
  return window.location.pathname.toLowerCase().indexOf(path) > -1
}
// set host and directory path to a var
const host = window.location.origin.toLowerCase()
const directoryPath = location.pathname.split('/')[1]
// Main function
function createCategoryLinks () {
  // Create some empty arrays to fill in with our data
  const optionValues = []
  const optionText = []
  $('#category-select option').each(function () {
    optionValues.push($(this).val())
  })
  $('#category-select option').each(function () {
    optionText.push($(this).text())
  })
  // Combine the arrays to make it easier to work with
  const combined = optionValues.map(function (elem, i) {
    return {
      idValue: elem,
      categoryText: optionText[i]
    }
  })
  // for loop to create the Links
  for (let id = 0; id <= combined.length - 1; id++) {
    $('.gz-cat:contains(' + combined[id].categoryText + ')').replaceWith('<a href="' + host + directoryPath + '/category/' + combined[id].idValue + ' " > ' + combined[id].categoryText + '</a> <div class= "period">,&nbsp;</div>')
    // Wait for the loop to finish then remove the comma at the end
    if (id === combined.length - 1) {
      // hide the last comma
      $('#gzns .gz-details-categories p .period').last().hide()
    }
  };
};
// Header

// Footer
// Wait till document has loaded to run the code
$(document).ready(function () {
  // Make sure we are on the proper page path or we do not run the code
  if (isPath('/' + directoryPath + '/member/')) {
    // Create area to insert Dropdown into.
    $('<div id="Category-Dropdown"></div>').insertAfter('#gzns h1')
    // Load the Droptdown from the /list page, after it loads run a function that creates the category links and then hides the dropdown
    $('#Category-Dropdown').load(host + '/' + directoryPath + '/ #category-select', createCategoryLinks).hide()
  };
})
// Should go in the footer
