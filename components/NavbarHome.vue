<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand to="/home">S&I SRS</b-navbar-brand>
      <b-navbar-nav>
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Navigate" right>
          <b-dropdown-item to="/emp/">Employees</b-dropdown-item>
          <b-dropdown-item to="/pos/">Positions</b-dropdown-item>
          <b-dropdown-item to="/sub/">Subsidiaries</b-dropdown-item>
          <b-dropdown-item to="/service/">Services</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Statistics" right>
          <b-dropdown-item to="/emp/stat">Employees</b-dropdown-item>
          <b-dropdown-item to="/pos/stat">Positions</b-dropdown-item>
          <b-dropdown-item to="/sub/stat">Subsidiaries</b-dropdown-item>
          <b-dropdown-item to="/service/stat">Services</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Edit" right>
          <b-dropdown-item to="/emp/edit">Employees</b-dropdown-item>
          <b-dropdown-item to="/pos/edit">Positions</b-dropdown-item>
          <b-dropdown-item to="/sub/edit">Subsidiaries</b-dropdown-item>
          <b-dropdown-item to="/service/edit">Services</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
