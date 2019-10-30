<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand to="/home">SIBOX</b-navbar-brand>
      <b-navbar-nav>
        <!-- Navbar dropdowns -->
        <b-nav-item to="/log">Logs</b-nav-item>
        <b-nav-item-dropdown text="Statistics" right>
          <b-dropdown-item to="/stat/">Summary</b-dropdown-item>
          <b-dropdown-item to="/stat/org">Organization Chart</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Overview" right>
          <b-dropdown-item to="/emp/">Employees</b-dropdown-item>
          <b-dropdown-item to="/pos/">Positions</b-dropdown-item>
          <b-dropdown-item to="/sub/">Subsidiaries</b-dropdown-item>
          <b-dropdown-item to="/service/">Services</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>
