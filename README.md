
# CSR Toolbox (Customer specific)

### Tool chain versions

 * JVM: 1.8
 * Scala: 2.11.8
 * sbt: 0.13.8

# Usage guide

### Prerequisites

This repository is a customer specification of csr-toolbox, you will need a
https://stash.qvantel.net/projects/RUBIK/repos/csr-toolbox/browse
compatible base image from the following repository:

### Build commands

To publish the customer-specific image to a local docker environment use one the following commands.

##### Publish to local docker env from an "artifactory.qvantel.net/" image ( require login ):
 `sbt "set qartifactResolvedBaseImage in QArtifact:=\"<imageName>\"" docker:publishLocal`

##### Publish to local docker env from local image:
 `sbt "set qartifactResolvedBaseImage in QArtifact:=\"<imageName>\"" "set artifactRepo:=\"\"" docker:publishLocal`

##### Publish to local docker env from another repository:
 `sbt "set qartifactResolvedBaseImage in QArtifact:=\"<imageName>\"" "set artifactRepo:=\"<artifactRepository>\"\" docker:publishLocal`

### Running docker

The docker can be run using the following command:
 * docker run --net=dockernet --name csr-toolbox-web -p 9000:9000 -d csr-toolbox-customizations:<tag>

If runtime configuration is desired ( ex: environment specific configuration ), then it can be added as env variable as:

 * A value: `-e "CFG_VALUE_APPS_CSR-TOOLBOX_CONFIG={example:{key1: \"value1\"}}"`
 * A path: `-e "CFG_PATH_APPS_CSR-TOOLBOX_CONFIG=/path/to/file/application.conf"`

Note: If the path variant is used the file must be present in the "spec"-folder and the absolute path should be used to access.


### Customization procedure

See [https://extranet.qvantel.com/display/CSRTB/Customizations](https://extranet.qvantel.com/display/CSRTB/Customizations)

### Add / Override files

It is possible to add new files to the customer-specific image. You add them into the "spec"-folder and they will end up in
as a Resource in the final image, with the same relative path.

It is also possible to overwrite already existing files from the base images' resource files. To do this add the new file in
the "spec"-folder, given the exact same relative path and filename.

To access the files in a non-relative manner (not recommended), replace the "spec/..." with "/opt/docker/conf/..."

##### Warning!
Do not overwrite the base images' "application.conf" file in this manner. Instead use the customer-specific configuration-file
in "/spec/config/application.conf" to add / override values from the base image configuration.
