# ff-ui
The FastForward UI

# top level menu

* cloud
	* data center
* Apps & Services
	* Apps
	* Services
		* index
			* list of all services
			* search of services
		* toolbox
			* create new service
				* name :textbox
				* group :textbox
				* type :droplist('springboot') # where does the types come from?
			* soft delete service
			* "show deleted" check-box
	* Jobs
* docker cluster
* environment








* abstraction layer
	* Availability Zone
		* down to physical implementation
			* rack
			* floor
			* power zone
	* execution environment
		* implementation
			* container
				* docker
				* lxc
				* lxd
			* vm
				* kvm
				* openstack
			* physical machine
				* MAAS
				* baochunxia
				* etc


* aggregation layer
	* is an implementation of abstraction layer
	* aggregates other aggregation or physical
	* virtual data center(AZ)
		* a virtual data center consists of:
			* network zone
* physical layer
	* is an implementation of abstraction layer
	* physical machine
	* physical network
	* other physical devices



