<div class="md-page">
<MdPageHeader name="" @on-close="handlerClose">
  <template slot="button">
  </template>
</MdPageHeader>
<div class="md-page-body md-pop-form" style="">
  <Form  ref="formRef" :rules="formRule" label-position="left"  :label-width="150" :model="postItem"  :class="disabled?'md-page-disabled':''">
    <mdTtile ref="basicInfo" titlename="基本信息" bgcolor="#e6e8e7" showButton v-model="showBasic"></mdTtile>
    <div class="md-page-body-box">
      <aside v-show="showBasic">
        <Row class="md-page-row md-page-row-border-top">
        </Row>
        <Row class="md-page-row">
        </Row>
      </aside>
    </div>
    <mdTtile ref="basicInfo" titlename="详细信息" bgcolor="#e6e8e7" showButton v-model="showDetail"></mdTtile>
    <div class="md-page-body-box">
      <aside v-show="showDetail">
        <Row class="md-page-row md-page-row-border-top">

        </Row>
        <Row class="md-page-row"></Row>
        <Row class="md-page-row"></Row>
        <Row class="md-page-row"></Row>
      </aside>
    </div>
    <mdTtile ref="basicInfo" titlename="附件信息" bgcolor="#e6e8e7" showButton v-model="showFiles"></mdTtile>
    <div class="md-page-body-box" v-show="showFiles">

    </div>
  </Form>
</div>
</div>
showBasic: true,
showDetail: true,
showFiles: true,
<style  lang="less">
@import "./md-Page.less";
@import "./style/md-page-new.less";
</style>
：


<Col span="12">
<FormItem label="关联流程编号："  label-position="top">
  <Input disabled  v-model="postItem.superiorProcessId" placeholder="系统自动生成"></Input>
</FormItem>
</Col>
