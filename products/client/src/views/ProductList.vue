<template>
  <div>

  <main class="mt-3">
    <div class="container">
      <div class="row mb-2">
        <select class="form-select">
          <option selected></option>
          <option value="1">노트북</option>
          <option value="2">모니터</option>
          <option value="3">키보드/마우스</option>
        </select>
      </div>
      <div class="row g-3">
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card" style="width: 18rem;">
            <img src="https://img.danawa.com/prod_img/500000/028/558/img/5558028_1.jpg?shrink=330:330&_v=20201023101348" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">로지텍 CRAFT (정품)</h5>
              <p class="card-text">
              <span class="badge bg-dark">전자제품</span>  
              <span class="badge bg-dark">컴퓨터</span>  
              <span class="badge bg-dark">악세사리</span>  
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                </div>
                <small class="text-dark">219,000원</small>
            </div>
            </div>
          </div>
        </div>        

        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card" style="width: 18rem;">
            <img src="https://img.danawa.com/prod_img/500000/079/417/img/13417079_1.jpg?shrink=330:330&_v=20221221141536" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">로지텍 G PRO X SUPERLIGHT (정품) (블랙)</h5>
              <p class="card-text">
              <span class="badge bg-dark">전자제품</span>  
              <span class="badge bg-dark">컴퓨터</span>  
              <span class="badge bg-dark">악세사리</span>  
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                </div>
                <small class="text-dark">219,000원</small>
              </div>
            </div>
          </div>
        </div>        
  
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card" style="width: 18rem;">
            <a href="product_detail.html"><img src="https://img.danawa.com/prod_img/500000/740/126/img/12126740_1.jpg?shrink=330:330&_v=20230116084754" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h5 class="card-title">삼성전자 F27T350</h5>
              <p class="card-text">
              <span class="badge bg-dark">전자제품</span>  
              <span class="badge bg-dark">컴퓨터</span>  
              <span class="badge bg-dark">모니터</span>  
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                </div>
                <small class="text-dark">194,000원</small>
              </div>
            </div>
          </div>
        </div>
  
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card" style="width: 18rem;">
            <img src="https://img.danawa.com/prod_img/500000/832/737/img/17737832_1.jpg?shrink=330:330&_v=20220829092321" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">프로젝터매니아 PJM 미니9 (정품)</h5>
              <p class="card-text">
              <span class="badge bg-dark">전자제품</span>  
              <span class="badge bg-dark">컴퓨터</span>  
              <span class="badge bg-dark">빔프로젝터</span>  
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                </div>
                <small class="text-dark">605,880원</small>
              </div>
            </div>
          </div>
        </div>
  
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card" style="width: 18rem;">
            <a href="product_detail.html"><img src="https://img.danawa.com/prod_img/500000/028/558/img/5558028_1.jpg?shrink=330:330&_v=20201023101348" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h5 class="card-title">로지텍 CRAFT (정품)</h5>
              <p class="card-text">
              <span class="badge bg-dark">전자제품</span>  
              <span class="badge bg-dark">컴퓨터</span>  
              <span class="badge bg-dark">악세사리</span>  
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                </div>
                <small class="text-dark">219,000원</small>
            </div>
            </div>
          </div>
        </div>        

        <div class="col-xl-3 col-lg-4 col-md-6" :key="i" v-for="(product, i) in productList">
          <div class="card" style="width: 18rem;">
            <img src="https://img.danawa.com/prod_img/500000/079/417/img/13417079_1.jpg?shrink=330:330&_v=20221221141536" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">로지텍 G PRO X SUPERLIGHT (정품) (블랙)</h5>
              <p class="card-text">
              <span class="badge bg-dark">전자제품</span>  
              <span class="badge bg-dark">컴퓨터</span>  
              <span class="badge bg-dark">악세사리</span>  
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                </div>
                <small class="text-dark">219,000원</small>
              </div>
            </div>
          </div>
        </div>        
  
        <div class="col-xl-3 col-lg-4 col-md-6" :key="i" v-for="(product, i) in productList">
          <div class="card" style="width: 18rem;">
            <a href="product_detail.html"><img src="product.path" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h5 class="card-title">{{product.product_name}}</h5>
              <p class="card-text">
              <span class="badge bg-dark">{{product.category1}}</span>  
              <span class="badge bg-dark">{{product.category2}}</span>  
              <span class="badge bg-dark">{{product.category3}}</span>  
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                </div>
                <small class="text-dark">{{product.product_price}}원</small>
              </div>
            </div>
          </div>
        </div>
  
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card" style="width: 18rem;">
            <img src="https://img.danawa.com/prod_img/500000/832/737/img/17737832_1.jpg?shrink=330:330&_v=20220829092321" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">프로젝터매니아 PJM 미니9 (정품)</h5>
              <p class="card-text">
              <span class="badge bg-dark">전자제품</span>  
              <span class="badge bg-dark">컴퓨터</span>  
              <span class="badge bg-dark">빔프로젝터</span>  
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                </div>
                <small class="text-dark">605,880원</small>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </main>

  <footer class="mt-5 py-5 bg-dark">
    <div class="row">
      <div class="col-12 col-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
        <small class="d-block mb-3 text-muted">&copy; 2017–2023</small>
      </div>
      <div class="col-6 col-md">
        <h5>Features</h5>
        <ul class="list-unstyled text-small">
          <li><a class="link-secondary" href="#">Cool stuff</a></li>
          <li><a class="link-secondary" href="#">Random feature</a></li>
          <li><a class="link-secondary" href="#">Team feature</a></li>
          <li><a class="link-secondary" href="#">Stuff for developers</a></li>
          <li><a class="link-secondary" href="#">Another one</a></li>
          <li><a class="link-secondary" href="#">Last time</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Resources</h5>
        <ul class="list-unstyled text-small">
          <li><a class="link-secondary" href="#">Resource name</a></li>
          <li><a class="link-secondary" href="#">Resource</a></li>
          <li><a class="link-secondary" href="#">Another resource</a></li>
          <li><a class="link-secondary" href="#">Final resource</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Resources</h5>
        <ul class="list-unstyled text-small">
          <li><a class="link-secondary" href="#">Business</a></li>
          <li><a class="link-secondary" href="#">Education</a></li>
          <li><a class="link-secondary" href="#">Government</a></li>
          <li><a class="link-secondary" href="#">Gaming</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>About</h5>
        <ul class="list-unstyled text-small">
          <li><a class="link-secondary" href="#">Team</a></li>
          <li><a class="link-secondary" href="#">Locations</a></li>
          <li><a class="link-secondary" href="#">Privacy</a></li>
          <li><a class="link-secondary" href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>  
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: []
    };
  },
  created() {
    this.getProductList();
  },
  methods: {
    async getProductList() {
      this.productList = await this.$api("/api/productList",{});
      console.log(this.productList);
    },
    goToDetail(product_id) {
     this.$router.push({path:'/detail', query:{product_id:product_id}}); 
    }
  }
}

</script>
