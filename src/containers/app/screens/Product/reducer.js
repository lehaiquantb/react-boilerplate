import { actionTypes } from './action';

const defaultState = {
  status: '',
  listCategory: [],
  error: null,
  page: 1,
  limit: 10,
  count: 0,
  listProductPaging: [],
  isProductPagingRequesting: false,
  productDetail: {},
  isDeletingProduct: false,
  isSearchingProduct: false,
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CATEGORY: {
      return {
        ...state,
      };
    }
    case actionTypes.ADD_CATEGORY_SUCCESS: {
      return {
        ...state,
        listCategory: action.listCategory,
      };
    }
    case actionTypes.GET_LIST_CATEGORY_SUCCESS: {
      return {
        ...state,
        listCategory: action.listCategory,
      };
    }
    case actionTypes.GET_PRODUCT_PAGING: {
      return {
        ...state,
        page: action.page,
        limit: action.limit,
        isProductPagingRequesting: true,
      };
    }
    case actionTypes.GET_PRODUCT_PAGING_SUCCESS: {
      return {
        ...state,
        listProductPaging: action.listProductPaging,
        isProductPagingRequesting: false,
        count: action.count,
      };
    }
    case actionTypes.GET_PRODUCT_PAGING_FILTER_SORTER: {
      return {
        ...state,
        isProductPagingRequesting: true,
      };
    }
    case actionTypes.GET_PRODUCT_PAGING_FILTER_SORTER_SUCCESS: {
      return {
        ...state,
        isProductPagingRequesting: false,
        listProductPaging: action.listProductPaging,
        count: action.count,
      };
    }
    case actionTypes.GET_PRODUCT_BY_PCODE: {
      return {
        ...state,
      };
    }

    case actionTypes.GET_PRODUCT_BY_PCODE_SUCCESS: {
      return {
        ...state,
        productDetail: action.productDetail,
      };
    }
    case actionTypes.DELETE_PRODUCT_BY_PCODE: {
      return {
        ...state,
        isDeletingProduct: true,
      };
    }
    case actionTypes.DELETE_PRODUCT_BY_PCODE_DONE: {
      return {
        ...state,
        isDeletingProduct: false,
      };
    }
    case actionTypes.SEARCH_PRODUCT: {
      return {
        ...state,
        isSearchingProduct: true,
      };
    }
    case actionTypes.SEARCH_PRODUCT_DONE: {
      return {
        ...state,
        isSearchingProduct: false,
        listProductPaging: action.listProductSearch,
        count: action.countProductSearch,
      };
    }
    default:
      return state;
  }
};
