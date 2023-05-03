
# Changelog

<details >
  <summary>Table of Contents</summary>

  &emsp;&emsp;[[0.10.1] - 2023-05-03](#0101---2023-05-03)<br/>
  &emsp;&emsp;&emsp;&emsp;[Fixed](#fixed)<br/>
  &emsp;&emsp;[[0.10.0] - 2023-04-20](#0100---2023-04-20)<br/>
  &emsp;&emsp;&emsp;&emsp;[Added](#added)<br/>
  &emsp;&emsp;&emsp;&emsp;[Fixed](#fixed)<br/>
  &emsp;&emsp;[[0.9.1] - 2023-04-02](#091---2023-04-02)<br/>
  &emsp;&emsp;&emsp;&emsp;[Added](#added)<br/>
  &emsp;&emsp;[[0.9.0] - 2023-04-02](#090---2023-04-02)<br/>
  &emsp;&emsp;&emsp;&emsp;[Added](#added)<br/>
  &emsp;&emsp;[[0.8.6] - 2023-03-21](#086---2023-03-21)<br/>
  &emsp;&emsp;&emsp;&emsp;[Added](#added)<br/>

</details>

## [0.10.1] - 2023-05-03

### Fixed

* Fix incorrect navigation of the generated directory in  `Github`  for the following scenarios
   * The content of  `()`  package exists
   * The content of  `（）`  package exists
   * The content of  `**`  package exists
   * Content with  `?`  exists
   * Content with  `？`  exists


## [0.10.0] - 2023-04-20

### Added

* Add a tool method for generating anchors:  `getAnchor` 


### Fixed

* Fix incorrect navigation of the generated directory in  `Github`  for the following scenarios
   * The content of  `[]`  package exists
   * The content of <code> `` </code> package exists


## [0.9.1] - 2023-04-02

### Added

* Update the example effect screenshots in  `README` 


## [0.9.0] - 2023-04-02

### Added

* New command parameter  `--jsx`  has been added for specifying the compilation method of  `JSX` , thus determining whether  `React`  needs to be manually imported


## [0.8.6] - 2023-03-21

### Added

* Implement basic command line tools
* Implement the basic function API and basic components

