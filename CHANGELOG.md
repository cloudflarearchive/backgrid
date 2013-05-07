### 0.2.6
Bug Fixes and Improvements

- TextCell should trigger and error and highlight the text area if the formatter
  returns undefined. [Issue #149](https://github.com/wyuenho/backgrid/issues/149)
- SelectCell and Select2Cell can now handle multiple
  selections. [Issue #152](https://github.com/wyuenho/backgrid/issues/159)
- ServerSideFilter's query parameter will now persist across server mode
  pagination with
  PageableCollection. [Issue #159](https://github.com/wyuenho/backgrid/issues/159)
- Paginator no longer requires the column definition list in its constructor.
- Paginator will no long page into the negative under server mode and when
  there's no `totalRecords`
  set. [Issue #33](https://github.com/wyuenho/backgrid/issues/33)
- DatetimeFormatter now accepts UNIX offset values and MomentFormatter now
  accepts both UNIX offset and UNIX timestamp
  values. [Issue #145](https://github.com/wyuenho/backgrid/issues/145)
- The `error` class can now be applied to cells without going into edit mode.
- SelectCellEditor will now save the value if there's only one
  option. [Issue #153](https://github.com/wyuenho/backgrid/issues/153)

### 0.2.5
New Features

- Keyboard Navigation. [Issue #3](https://github.com/wyuenho/backgrid/issues/3)

Bug Fixes and Improvements

- Select2Cell is now compatible with select2
  3.3.x. [Issue #89](https://github.com/wyuenho/backgrid/issues/89)
- MomentCell is now compatible with moment.js
  2.0.0. [Issue #80](https://github.com/wyuenho/backgrid/issues/80)
- Various bug fixes in backbone-pageable 1.2.1 and
  1.2.2. [Issue #110](https://github.com/wyuenho/backgrid/issues/110)
- Stop propagation of DOM events in
  cells. [Issue #118](https://github.com/wyuenho/backgrid/issues/118)
- Fix sorting issue with server mode PageableCollection when using Backbone
  1.0+. [Issue #132](https://github.com/wyuenho/backgrid/issues/132)
- Fix bug where passing any other View constructor options other than `model`
  and `collection` will override the view options of all the other direct
  subviews'. [Issue #137](https://github.com/wyuenho/backgrid/issues/137)
- TextCell doesn't throw an error anymore when cancelling editing an undefined
  model attribute. [Issue #142](https://github.com/wyuenho/backgrid/issues/142)
- Switching focus on two different cells with invalid attributes no long content
  for focus. [Issue #144](https://github.com/wyuenho/backgrid/issues/144)
- Setting a formatter in column definition should override the cell class'
  formatter. (Regression)
  [Issue #140](https://github.com/wyuenho/backgrid/issues/140)
- Reorganized Backgrid events, all inter-View Backgrid events will now only be
  triggered from the model and/or collection. (Breaking Change)
  [Issue #131](https://github.com/wyuenho/backgrid/issues/131)
- Paginator no longer derives from Footer and is now a stand-alone widget
  instead. (Breaking Change)
  [Issue #120](https://github.com/wyuenho/backgrid/issues/120)

### 0.2.0
- SelectAll
  extension. [Issue #18](https://github.com/wyuenho/backgrid/issues/18)
- Filter extension. [Issue #20](https://github.com/wyuenho/backgrid/issues/20)
- Fixed issue with $ conflict in the core
  IIME. [Issue #61](https://github.com/wyuenho/backgrid/pull/61)
- Fixed issue with multiple invalid cells mutually steal
  focus. [Issue #64](https://github.com/wyuenho/backgrid/issues/64)
- Fixed issue where the paginator's handlers are off by one when the
  PageCollection's firstPage starts
  at 0. [Issue #70](https://github.com/wyuenho/backgrid/issues/70)
- Fixed issue where grid components lost event handlers after
  rendering. [Issue #71](https://github.com/wyuenho/backgrid/issues/71)
- Rectified decrepencies with the naming of various Backgrid Backbone
  events. Now all Backgrid Backbone event names are prefixed with 'backgrid:'.
- `null` or `undefined` model values are now displayed as empty strings in the
  table cells.
- Adjusted `CellEditor` inheritance hierachy, moved around a few DOM event
  handler.
- `resolveNameToClass` can now take hyphenated names.
- `headerCell` definition can now be specified by a string alias.
- Upgraded dependencies. Backgrid now works with Backbone 1.0.0,
  Underscore 1.4.4, backbone-pageable 1.2.0, jQuery 1.9.1, select2 3.3.1, and
  lunrjs 0.2.3.

### 0.1.4
- Fixed text-overflow: ellipsis in backgrid.css.
  [Issue #57](https://github.com/wyuenho/backgrid/pull/57)
- Fixed bug where removing a hidden column removes the wrong column of
  cells. [Issue #58](https://github.com/wyuenho/backgrid/issues/58)
- A hidden column is now hidden from the DOM instead of
  detached. [Issue #60](https://github.com/wyuenho/backgrid/issues/60)

### 0.1.3
- Fixed 2 security vulnerabilities in SelectCellEditor and TextareaCellEditor.
- Fixed a paginator regression TypeError when a server mode PageableCollection
  is supplied. [Issue #52](https://github.com/wyuenho/backgrid/issues/52)

### 0.1.2
- Grids can now be initialized synchronously under any pagination
  mode. [Issue #44](https://github.com/wyuenho/backgrid/issues/44),
  [Issue #45](https://github.com/wyuenho/backgrid/issues/45),
  backbone-pageable 1.1.5
- Allow the use of custom header, body, row and footer by supplying them in the
  grid constructor as
  options. [Issue #40](https://github.com/wyuenho/backgrid/issues/40)
- Cells rerender themselves during display mode upon model attribute
  changes. [Issue #37](https://github.com/wyuenho/backgrid/issues/37)
- Fixed bug where new rows aren't inserted into the body when the grid is
  initially empty. [Issue #36](https://github.com/wyuenho/backgrid/issues/36)
- Paginator now displays a single page handle numbered 1 when the collection is
  empty. [Issue #35](https://github.com/wyuenho/backgrid/issues/35)
- Grid now renders on columns reset. [Issue #34](https://github.com/wyuenho/backgrid/issues/34)
- `null` or `undefined` values on a datetime type model attribute no longer
  throws an error. [Issue #32](https://github.com/wyuenho/backgrid/pull/32),
  [Issue #43](https://github.com/wyuenho/backgrid/pull/43)
- Backbone.PageableCollection no longer need to be present in order for the
  header to work. [Issue #30](https://github.com/wyuenho/backgrid/issues/30)
- `cursor: pointer` for the sort carets in the
  header. [Issue #29](https://github.com/wyuenho/backgrid/issues/29)
- Numbered paginator handlers no longer point to the wrong pages after clicking
  on the go to last page
  handle. [Issue #28](https://github.com/wyuenho/backgrid/issues/28)
- Put rendered rows into a document fragment to speed up rendering of the grid
  body. [Issue #26](https://github.com/wyuenho/backgrid/issues/26)

### 0.1.1
- Fix issue where the default comparator is sorting incorrectly for
  models. [Issue #23](https://github.com/wyuenho/backgrid/issues/23)

### 0.1
- Initial Release
