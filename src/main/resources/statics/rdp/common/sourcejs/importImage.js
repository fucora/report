var imageActionName="";function importImage(){var e=hot.Methods.getSelected();if(e){var t=e[0];hot.Methods.getCellMeta(t[0],t[1]);imageActionName="importImage",$("#importImage").click()}}function addImage(){hot.Methods.getSelected()&&(imageActionName="addImage",$("#importImage").click())}function delImage(){var e=$(".cell-img.curr-img");0<e.length&&(hot.Methods.getCellMeta(e.data("r"),e.data("c")).image[e.data("index")]={},e.unbind().remove())}function clearImage(){var e=hot.Methods.getSelected();if(e){var t=e[0],a=hot.Methods.getCell(t[0],t[1]);hot.Methods.setCellMeta(t[0],t[1],"bgimage",""),a.style.backgroundImage=""}}function getImg(){var g=new FileReader,e=$("#importImage")[0].files[0];e&&(g.readAsDataURL(e),g.onload=function(e){if(105e4<g.result.length)layer.msg("上传失败，请上传不大于1M的图片！");else{var t=hot.Methods.getSelected();if(t){var a=t[0],o=hot.Methods.getCell(a[0],a[1]);hot.Methods.setCellMeta(a[0],a[1],"image",g.result),o.style.backgroundImage='url("'+g.result+'")',o.style.backgroundRepeat="no-repeat"}}})}