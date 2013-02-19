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
