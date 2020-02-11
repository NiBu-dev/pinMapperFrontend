# Pin Mapper for Aurix microcontroller

## This app is a helper tool which auto-maps signals to pins for a microcontroller.

### Problem statement

A micrcocontroller chip is provided with a number of configurable ports. Some of these ports can be configured to have different functionalities.
Thus, this becomes might become a limitation when it comes to map a number of functionalities to a number of ports.

### Solution

The solution provided is based on **Maximum Bipartite Matching problem**

A matching in a Bipartite Graph is a set of the edges chosen in such a way that no two edges share an endpoint. A maximum matching is a matching of maximum size (maximum number of edges). In a maximum matching, if any edge is added to it, it is no longer a matching. There can be more than one maximum matchings for a given Bipartite Graph.

Let's note the field of wanted signals with S and field of all ports with P.

A signal can be mapped on different possible pins. These posibilities are marked by arrows in the following image.
The maximum matching algorithm returns a maximum possible matching between these two field. The arrows marked with red color are equivalent with maximum matching.

![Maximum matching](/src/assets/images/matching2.jpg)

Maximum matching

### This application is implemented based on the algorithm described above.

