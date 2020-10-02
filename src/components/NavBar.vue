<template>
  <div>
    <Row id="Container" class="parent">
      <Col span="24">        
      </Col>  
    </Row>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
    color: String
  },
  mounted() {

  },
  computed: {
    propertyColor() {
      return this.color;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.parent {
  height: 400px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
