<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand to="/home">S&I SRS</b-navbar-brand>
      <b-navbar-nav>
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Add" right>
          <b-dropdown-item to="/subs">Subsidiaries</b-dropdown-item>
          <b-dropdown-item to="/employees">Employees</b-dropdown-item>
          <b-dropdown-item to="/services">Services</b-dropdown-item>
          <b-dropdown-item to="/tasks">Tasks</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Edit" right>
          <b-dropdown-item to="/subs">Subsidiaries</b-dropdown-item>
          <b-dropdown-item to="/employees">Employees</b-dropdown-item>
          <b-dropdown-item to="/services">Services</b-dropdown-item>
          <b-dropdown-item to="/tasks">Tasks</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Remove" right>
          <b-dropdown-item to="/subs">Subsidiaries</b-dropdown-item>
          <b-dropdown-item to="/employees">Employees</b-dropdown-item>
          <b-dropdown-item to="/services">Services</b-dropdown-item>
          <b-dropdown-item to="/tasks">Tasks</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
