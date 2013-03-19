Handlebars.templates = Handlebars.templates || {};


// template --- tmpl-CreateContact ---
Handlebars.templates['tmpl-CreateContact'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "Edit";}

function program3(depth0,data) {
  
  
  return "Create";}

function program5(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += " value=\"";
  foundHelper = helpers.etag;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.etag; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" ";
  return buffer;}

function program7(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "value='";
  foundHelper = helpers.fullName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.fullName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "' ";
  return buffer;}

function program9(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "value='";
  foundHelper = helpers.fullName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.fullName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "' ";
  return buffer;}

function program11(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "value='";
  foundHelper = helpers.familyName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.familyName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "' ";
  return buffer;}

function program13(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "value='";
  foundHelper = helpers.email;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "' ";
  return buffer;}

function program15(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "value='";
  foundHelper = helpers.phone;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.phone; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "' ";
  return buffer;}

function program17(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "value='";
  foundHelper = helpers.bir;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.bir; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "' ";
  return buffer;}

function program19(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "value='";
  foundHelper = helpers.groupId;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.groupId; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "' ";
  return buffer;}

function program21(depth0,data) {
  
  var stack1, foundHelper;
  foundHelper = helpers.notes;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.notes; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  return escapeExpression(stack1);}

function program23(depth0,data) {
  
  
  return "Update";}

function program25(depth0,data) {
  
  
  return "Create";}

  buffer += "<div class=\"CreateContact\">\n        <div class='CreateContactDialogGlass'/>\n        <div class=\"CreateContact-content\">\n            <h2>";
  stack1 = depth0.id;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Contact</h2>\n\n            <div class=\"form form-horizontal\">\n\n                <div class=\"control-group \">\n                    <label class=\"control-label\">Full Name:</label>\n                    <div class=\"controls\">\n                        <input type=\"hidden\" name=\"etag\" ";
  stack1 = depth0.etag;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n                        <input type=\"text\" name=\"fullName\" ";
  stack1 = depth0.fullName;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(7, program7, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " placeholder=\"\"><span class=\"help-inline\"></span>\n                    </div>\n                </div>\n                <div class=\"control-group \">\n                    <label class=\"control-label\">Given Name:</label>\n                    <div class=\"controls\">\n                        <input type=\"text\" name=\"givenName\" ";
  stack1 = depth0.givenName;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(9, program9, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " placeholder=\"\"><span class=\"help-inline\"></span>\n                    </div>\n                </div>\n                <div class=\"control-group \">\n                    <label class=\"control-label\">Family Name:</label>\n                    <div class=\"controls\">\n                        <input type=\"text\" name=\"familyName\" ";
  stack1 = depth0.familyName;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(11, program11, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " placeholder=\"\"><span class=\"help-inline\"></span>\n                    </div>\n                </div>\n                <div class=\"control-group \">\n                    <label class=\"control-label\">Email:</label>\n                    <div class=\"controls\">\n                        <input type=\"text\" name=\"email\" ";
  stack1 = depth0.email;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(13, program13, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " placeholder=\"\"><span class=\"help-inline\"></span>\n                    </div>\n                </div>\n                <div class=\"control-group \">\n                    <label class=\"control-label\">Phone:</label>\n                    <div class=\"controls\">\n                        <input type=\"text\" name=\"phone\" ";
  stack1 = depth0.phone;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(15, program15, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " placeholder=\"\"><span class=\"help-inline\"></span>\n                    </div>\n                </div>\n\n                <div class=\"control-group \">\n                    <label class=\"control-label\">Birth Date:</label>\n                    <div class=\"controls\">\n                        <input type=\"text\" name=\"bir\" ";
  stack1 = depth0.bir;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(17, program17, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " placeholder=\"\"><span class=\"help-inline\"></span>\n                    </div>\n                </div>\n                <div class=\"control-group \">\n                    <label class=\"control-label\">Group:</label>\n                    <div class=\"controls\">\n                        <input type=\"text\" name=\"groupId\" ";
  stack1 = depth0.groupId;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(19, program19, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " placeholder=\"\"><span class=\"help-inline\"></span>\n                    </div>\n                </div>\n                <div class=\"control-group \">\n                    <label class=\"control-label\">Note:</label>\n                    <div class=\"controls\">\n                        <textarea rows=\"5\" style=\"width:280px\" name=\"notes\" placeholder=\"note hear\">";
  stack1 = depth0.notes;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(21, program21, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</textarea>\n                    </div>\n                </div>\n\n\n                <div class=\"form-actions\">\n                    <a href=\"#\" class=\"btn btn-primary createContactBtn\">";
  stack1 = depth0.id;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.program(25, program25, data),fn:self.program(23, program23, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n                    <a href=\"#\" class=\"btn cancelBtn\">Close</a>\n                </div>\n            </div>\n        </div>\n    </div>";
  return buffer;}
);

// template --- tmpl-CreateGroup ---
Handlebars.templates['tmpl-CreateGroup'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "Edit";}

function program3(depth0,data) {
  
  
  return "Create";}

function program5(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += " value='";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "'";
  return buffer;}

function program7(depth0,data) {
  
  
  return "Update";}

function program9(depth0,data) {
  
  
  return "Create";}

  buffer += "<div class=\"CreateGroup\">\n		<div class='CreateGroupDialogGlass' />\n	    <div class=\"CreateGroup-content\">\n	        <h2>";
  stack1 = depth0.groupId;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Group</h2>\n	        <div class=\"form\">\n		        <div class=\"control-group\">\n		  		Name:<input type=\"text\"  name=\"name\" ";
  stack1 = depth0.title;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " placeholder=\"\"><span class=\"help-inline\" ></span>\n		  		<br/>\n		  		</div>\n		  		<div>\n		    		<a href=\"#\" class=\"btn btn-primary createGroupBtn\">";
  stack1 = depth0.groupId;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n		    		<a href=\"#\" class=\"btn cancelBtn\">Close</a>\n		  		</div>\n	        </div>\n	    </div>\n    </div>";
  return buffer;}
);

// template --- tmpl-DataTable ---
Handlebars.templates['tmpl-DataTable'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"dataTable\">\n\n    </div>";}
);

// template --- tmpl-DataTable-Content ---
Handlebars.templates['tmpl-DataTable-Content'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"DataTable-container\">\n        <table class=\"table table-striped table-head-fix\">\n            <thead>\n            </thead>\n        </table>\n        <div class=\"table-item-container\">\n            <table class=\"table table-striped\">\n                <tbody class=\"listItem\">\n                </tbody>\n            </table>\n        </div>\n    </div>";}
);

// template --- tmpl-DataTable-Foot ---
Handlebars.templates['tmpl-DataTable-Foot'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n        <span class=\"goto\">\n          <span class=\"gotoBtn\">Go to:</span>\n          <input name=\"gotoPage\" type=\"text\" value=\"";
  foundHelper = helpers.pageNum;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pageNum; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" />\n        </span>\n        ";
  return buffer;}

function program3(depth0,data) {
  
  
  return "selected";}

function program5(depth0,data) {
  
  
  return "selected";}

function program7(depth0,data) {
  
  
  return "selected";}

function program9(depth0,data) {
  
  
  return "selected";}

function program11(depth0,data) {
  
  
  return "selected";}

function program13(depth0,data) {
  
  
  return "selected";}

function program15(depth0,data) {
  
  
  return "selected";}

function program17(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n          <span class=\"nums\">\n            <span class=\"num prevStart ";
  stack1 = depth0.isFirst;
  stack1 = helpers.unless.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(18, program18, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">&lt;&lt;</span>\n            <span class=\"num prev ";
  stack1 = depth0.isFirst;
  stack1 = helpers.unless.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(20, program20, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">&lt;</span>\n            ";
  stack1 = depth0.pageNum;
  foundHelper = helpers.lt;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, 3, {hash:{},inverse:self.program(31, program31, data),fn:self.program(22, program22, data)}) : helperMissing.call(depth0, "lt", stack1, 3, {hash:{},inverse:self.program(31, program31, data),fn:self.program(22, program22, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <span class=\"num next ";
  stack1 = depth0.isLast;
  stack1 = helpers.unless.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(45, program45, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">&gt;</span>\n            <span class=\"num nextEnd ";
  stack1 = depth0.isLast;
  stack1 = helpers.unless.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(47, program47, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">&gt;&gt;</span>\n          </span>\n        ";
  return buffer;}
function program18(depth0,data) {
  
  
  return "action";}

function program20(depth0,data) {
  
  
  return "action";}

function program22(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n              ";
  stack1 = depth0.pageCount;
  foundHelper = helpers.gt;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, 6, {hash:{},inverse:self.program(27, program27, data),fn:self.program(23, program23, data)}) : helperMissing.call(depth0, "gt", stack1, 6, {hash:{},inverse:self.program(27, program27, data),fn:self.program(23, program23, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;}
function program23(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " \n                ";
  stack1 = depth0.getArrayFrom1To6;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(program24, data, depth0)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              ";
  return buffer;}
function program24(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n                  <span class=\"num pageNum ";
  stack1 = depth1.pageNum;
  stack2 = depth0.num;
  foundHelper = helpers.notEqual;
  stack1 = foundHelper ? foundHelper.call(depth0, stack2, stack1, {hash:{},inverse:self.noop,fn:self.program(25, program25, data)}) : helperMissing.call(depth0, "notEqual", stack2, stack1, {hash:{},inverse:self.noop,fn:self.program(25, program25, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-num='";
  stack1 = depth0.num;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "'>";
  stack1 = depth0.num;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</span> \n                ";
  return buffer;}
function program25(depth0,data) {
  
  
  return "action";}

function program27(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = depth0.getArrayFrom1ToPC;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(program28, data, depth0)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              ";
  return buffer;}
function program28(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n                  <span class=\"num pageNum ";
  stack1 = depth1.pageNum;
  stack2 = depth0.num;
  foundHelper = helpers.notEqual;
  stack1 = foundHelper ? foundHelper.call(depth0, stack2, stack1, {hash:{},inverse:self.noop,fn:self.program(29, program29, data)}) : helperMissing.call(depth0, "notEqual", stack2, stack1, {hash:{},inverse:self.noop,fn:self.program(29, program29, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-num='";
  stack1 = depth0.num;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "'>";
  stack1 = depth0.num;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</span> \n                ";
  return buffer;}
function program29(depth0,data) {
  
  
  return "action";}

function program31(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n              ";
  stack1 = depth0.pageNum;
  stack2 = depth0.pageCount;
  foundHelper = helpers.gtt;
  stack1 = foundHelper ? foundHelper.call(depth0, stack2, stack1, 3, {hash:{},inverse:self.program(36, program36, data),fn:self.program(32, program32, data)}) : helperMissing.call(depth0, "gtt", stack2, stack1, 3, {hash:{},inverse:self.program(36, program36, data),fn:self.program(32, program32, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;}
function program32(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = depth0.getArrayFromPr2ToPa3;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(program33, data, depth0)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              ";
  return buffer;}
function program33(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n                  <span class=\"num pageNum ";
  stack1 = depth1.pageNum;
  stack2 = depth0.num;
  foundHelper = helpers.notEqual;
  stack1 = foundHelper ? foundHelper.call(depth0, stack2, stack1, {hash:{},inverse:self.noop,fn:self.program(34, program34, data)}) : helperMissing.call(depth0, "notEqual", stack2, stack1, {hash:{},inverse:self.noop,fn:self.program(34, program34, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-num='";
  stack1 = depth0.num;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "'>";
  stack1 = depth0.num;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</span> \n                ";
  return buffer;}
function program34(depth0,data) {
  
  
  return "action";}

function program36(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n                ";
  stack1 = depth0.pageCount;
  foundHelper = helpers.gt;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, 6, {hash:{},inverse:self.program(41, program41, data),fn:self.program(37, program37, data)}) : helperMissing.call(depth0, "gt", stack1, 6, {hash:{},inverse:self.program(41, program41, data),fn:self.program(37, program37, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              ";
  return buffer;}
function program37(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                  ";
  stack1 = depth0.getArrayFromPCr6ToPC;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(program38, data, depth0)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;}
function program38(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n                    <span class=\"num pageNum ";
  stack1 = depth1.pageNum;
  stack2 = depth0.num;
  foundHelper = helpers.notEqual;
  stack1 = foundHelper ? foundHelper.call(depth0, stack2, stack1, {hash:{},inverse:self.noop,fn:self.program(39, program39, data)}) : helperMissing.call(depth0, "notEqual", stack2, stack1, {hash:{},inverse:self.noop,fn:self.program(39, program39, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-num='";
  stack1 = depth0.num;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "'>";
  stack1 = depth0.num;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</span> \n                  ";
  return buffer;}
function program39(depth0,data) {
  
  
  return "action";}

function program41(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                  ";
  stack1 = depth0.getArrayFrom1ToPC;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(program42, data, depth0)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;}
function program42(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n                    <span class=\"num pageNum ";
  stack1 = depth1.pageNum;
  stack2 = depth0.num;
  foundHelper = helpers.notEqual;
  stack1 = foundHelper ? foundHelper.call(depth0, stack2, stack1, {hash:{},inverse:self.noop,fn:self.program(43, program43, data)}) : helperMissing.call(depth0, "notEqual", stack2, stack1, {hash:{},inverse:self.noop,fn:self.program(43, program43, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-num='";
  stack1 = depth0.num;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "'>";
  stack1 = depth0.num;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</span> \n                  ";
  return buffer;}
function program43(depth0,data) {
  
  
  return "action";}

function program45(depth0,data) {
  
  
  return "action";}

function program47(depth0,data) {
  
  
  return "action";}

  buffer += "<div class=\"tfoot\">\n        ";
  stack1 = depth0.pageCount;
  foundHelper = helpers.gt;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, 1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}) : helperMissing.call(depth0, "gt", stack1, 1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <span class=\"showRows\">\n          Show Rows\n          <select name=\"pageSize\">\n          <option ";
  stack1 = depth0.pageSize;
  foundHelper = helpers.equal;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, 5, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)}) : helperMissing.call(depth0, "equal", stack1, 5, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">5</option>\n          <option ";
  stack1 = depth0.pageSize;
  foundHelper = helpers.equal;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, 10, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)}) : helperMissing.call(depth0, "equal", stack1, 10, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">10</option>\n          <option ";
  stack1 = depth0.pageSize;
  foundHelper = helpers.equal;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, 15, {hash:{},inverse:self.noop,fn:self.program(7, program7, data)}) : helperMissing.call(depth0, "equal", stack1, 15, {hash:{},inverse:self.noop,fn:self.program(7, program7, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">15</option>\n          <option ";
  stack1 = depth0.pageSize;
  foundHelper = helpers.equal;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, 25, {hash:{},inverse:self.noop,fn:self.program(9, program9, data)}) : helperMissing.call(depth0, "equal", stack1, 25, {hash:{},inverse:self.noop,fn:self.program(9, program9, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">25</option>\n          <option ";
  stack1 = depth0.pageSize;
  foundHelper = helpers.equal;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, 50, {hash:{},inverse:self.noop,fn:self.program(11, program11, data)}) : helperMissing.call(depth0, "equal", stack1, 50, {hash:{},inverse:self.noop,fn:self.program(11, program11, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">50</option>\n          <option ";
  stack1 = depth0.pageSize;
  foundHelper = helpers.equal;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, 100, {hash:{},inverse:self.noop,fn:self.program(13, program13, data)}) : helperMissing.call(depth0, "equal", stack1, 100, {hash:{},inverse:self.noop,fn:self.program(13, program13, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">100</option>\n          <option ";
  stack1 = depth0.pageSize;
  foundHelper = helpers.equal;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, 500, {hash:{},inverse:self.noop,fn:self.program(15, program15, data)}) : helperMissing.call(depth0, "equal", stack1, 500, {hash:{},inverse:self.noop,fn:self.program(15, program15, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">500</option>\n          </select>\n        </span>\n        <span class=\"info\">";
  foundHelper = helpers.startRows;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.startRows; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " - ";
  foundHelper = helpers.endRows;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.endRows; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " of ";
  foundHelper = helpers.sizeCount;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.sizeCount; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span>\n        ";
  stack1 = depth0.pageCount;
  foundHelper = helpers.gt;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, 1, {hash:{},inverse:self.noop,fn:self.program(17, program17, data)}) : helperMissing.call(depth0, "gt", stack1, 1, {hash:{},inverse:self.noop,fn:self.program(17, program17, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>";
  return buffer;}
);

// template --- tmpl-DropboxAccountInfo ---
Handlebars.templates['tmpl-DropboxAccountInfo'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"container\">\n		<table class=\"table table-striped\">\n			<tr><td>username</td><td>";
  stack1 = depth0.account;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.display_name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</td></tr>\n			<tr><td>uid</td><td>";
  stack1 = depth0.account;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.uid;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</td></tr>\n			<tr><td>country</td><td>";
  stack1 = depth0.account;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.country;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</td></tr>\n			<tr><td>email</td><td>";
  stack1 = depth0.account;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.email;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</td></tr>\n			<tr><td>referral link</td><td>";
  stack1 = depth0.account;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.referral_link;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</td></tr>\n			<tr><td>shared</td><td>";
  stack1 = depth0.account;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.quota_info;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.shared;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</td></tr>\n			<tr><td>quota</td><td>";
  stack1 = depth0.account;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.quota_info;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.quota;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</td></tr>\n			<tr><td>normal</td><td>";
  stack1 = depth0.account;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.quota_info;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.normal;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</td></tr>\n		</table>\n	</div>";
  return buffer;}
);

// template --- tmpl-DropboxDialog ---
Handlebars.templates['tmpl-DropboxDialog'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "\n				<input type=\"text\" name=\"folder\" class=\"input-block-level\"  placeholder=\"folder name\"/>\n				<div class=\"dialogBtns\">\n					<button class=\"btn btn-primary save\">Save</button>\n					<button class=\"btn btn-primary cancel\">Cancel</button>\n			 </div>\n			 ";}

function program3(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n			 ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.type;
  foundHelper = helpers.equal;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "upload", {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data)}) : helperMissing.call(depth0, "equal", stack1, "upload", {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			 ";
  return buffer;}
function program4(depth0,data) {
  
  
  return "\n			 <input type=\"file\" name=\"file\" placeholder=\"folder name\"/>\n				<div class=\"dialogBtns\">\n					<button class=\"btn btn-primary upload\">Upload</button>\n					<button class=\"btn btn-primary cancel\">Cancel</button>\n			 </div>\n			 ";}

function program6(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n			 ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.type;
  foundHelper = helpers.equal;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "sharelink", {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data)}) : helperMissing.call(depth0, "equal", stack1, "sharelink", {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			 ";
  return buffer;}
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			 <input type=\"text\" name=\"sharelink\" class=\"input-block-level\" value=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.sharelink;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\"/>\n			 ";
  return buffer;}

function program9(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n			  	";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.type;
  foundHelper = helpers.equal;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "restore", {hash:{},inverse:self.program(16, program16, data),fn:self.program(10, program10, data)}) : helperMissing.call(depth0, "equal", stack1, "restore", {hash:{},inverse:self.program(16, program16, data),fn:self.program(10, program10, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			 ";
  return buffer;}
function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				 	";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.revisions;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(11, program11, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				 	<div class=\"dialogBtns\">\n						<button class=\"btn btn-primary restore\">Restore</button>\n						<button class=\"btn btn-primary cancel\">Cancel</button>\n				 </div>\n			 	 ";
  return buffer;}
function program11(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n				 	<div class=\"revitem\">\n				 		<input type=\"radio\" name=\"revision\" value=\"";
  foundHelper = helpers.rev;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.rev; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-path=\"";
  foundHelper = helpers.path;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.path; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"/>\n				 		<img class=\"sprite_web s_web_";
  foundHelper = helpers.icon;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.icon; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "_32 pointer space\" src=\"https://www.dropbox.com/static/images/icons/icon_spacer.gif\"/>\n				 		";
  stack1 = depth0.path;
  foundHelper = helpers.filename;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "filename", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "revision:";
  foundHelper = helpers.revision;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.revision; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\n				 		<span>\n					 		";
  stack1 = depth0.is_deleted;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					 		--";
  stack1 = depth0.modified;
  foundHelper = helpers.localDate;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "localDate", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "\n				 		</span>\n				 	</div>\n				 	";
  return buffer;}
function program12(depth0,data) {
  
  
  return "\n					 		Deleted\n					 		";}

function program14(depth0,data) {
  
  
  return "\n					 		Added\n					 		";}

function program16(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n					 ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.type;
  foundHelper = helpers.equal;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "copy", {hash:{},inverse:self.program(21, program21, data),fn:self.program(17, program17, data)}) : helperMissing.call(depth0, "equal", stack1, "copy", {hash:{},inverse:self.program(21, program21, data),fn:self.program(17, program17, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				 ";
  return buffer;}
function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n					 <div class=\"itemDiv\">\n					 	<div class=\"folderitem\" data-path=\"/\">\n					 		<img src=\"https://dt8kf6553cww8.cloudfront.net/static/images/icons/icon_spacer-vflN3BYt2.gif\" \n							alt=\"\" class=\"sprite sprite_web s_web_dropbox space link-img\"/>\n					 		<span class=\"foldername\">dropbox</span>\n					 	</div>\n					 </div>\n					 	";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.metadata;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.contents;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(18, program18, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					 	<div class=\"dialogBtns\">\n							<button class=\"btn btn-primary copy\">Copy</button>\n							<button class=\"btn btn-primary cancel\">Cancel</button>\n				 		</div>\n				 		";
  return buffer;}
function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n							";
  stack1 = depth0.is_dir;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(19, program19, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n						";
  return buffer;}
function program19(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n							<div class=\"itemDiv\">\n								<div class=\"folderitem\" data-path=\"";
  foundHelper = helpers.path;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.path; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n									<img src=\"https://dt8kf6553cww8.cloudfront.net/static/images/icons/icon_spacer-vflN3BYt2.gif\" \n									alt=\"\" border=\"0\" class=\"sprite sprite_web  s_web_bullet_plus pointer \">\n									<img src=\"https://dt8kf6553cww8.cloudfront.net/static/images/icons/icon_spacer-vflN3BYt2.gif\" \n									alt=\"\" class=\"sprite sprite_web  s_web_folder link-img\"/>\n									\n									<span class=\"foldername\">";
  stack1 = depth0.path;
  foundHelper = helpers.filename;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "filename", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</span>\n								</div>\n							</div>\n							";
  return buffer;}

function program21(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n				 			 ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.type;
  foundHelper = helpers.equal;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "move", {hash:{},inverse:self.noop,fn:self.program(22, program22, data)}) : helperMissing.call(depth0, "equal", stack1, "move", {hash:{},inverse:self.noop,fn:self.program(22, program22, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					 ";
  return buffer;}
function program22(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n					 <div class=\"itemDiv\">\n					 	<div class=\"folderitem\" data-path=\"/\">\n					 		<img src=\"https://dt8kf6553cww8.cloudfront.net/static/images/icons/icon_spacer-vflN3BYt2.gif\" \n							alt=\"\" class=\"sprite sprite_web s_web_dropbox space link-img\"/>\n					 		<span class=\"foldername\">dropbox</span>\n					 	</div>\n					 </div>\n					 	";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.metadata;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.contents;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(23, program23, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					 	<div class=\"dialogBtns\">\n							<button class=\"btn btn-primary move\">Move</button>\n							<button class=\"btn btn-primary cancel\">Cancel</button>\n				 		</div>\n				 		";
  return buffer;}
function program23(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n							";
  stack1 = depth0.is_dir;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(24, program24, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n						";
  return buffer;}
function program24(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n							<div class=\"itemDiv\">\n								<div class=\"folderitem\" data-path=\"";
  foundHelper = helpers.path;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.path; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n									<img src=\"https://dt8kf6553cww8.cloudfront.net/static/images/icons/icon_spacer-vflN3BYt2.gif\" \n									alt=\"\" border=\"0\" class=\"sprite sprite_web  s_web_bullet_plus pointer \">\n									<img src=\"https://dt8kf6553cww8.cloudfront.net/static/images/icons/icon_spacer-vflN3BYt2.gif\" \n									alt=\"\" class=\"sprite sprite_web  s_web_folder link-img\"/>\n									\n									<span class=\"foldername\">";
  stack1 = depth0.path;
  foundHelper = helpers.filename;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "filename", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</span>\n								</div>\n							</div>\n							";
  return buffer;}

  buffer += "<div class=\"dropbox dropfiles\">\n	  <div class=\"dialogBackground\">\n		</div>\n		<div class=\"dialogContent\">\n			<div class=\"dialogHead\">\n				<span class=\"dialogTitle\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.displayName;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</span>\n				<span class=\"close dialogBtns dialogCloseBtn\">&times;</span>\n			</div>\n			<div class=\"dialogBody\" data-path=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.path;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\">\n				";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.type;
  foundHelper = helpers.equal;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "folder", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data)}) : helperMissing.call(depth0, "equal", stack1, "folder", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</div>\n		</div>\n	</div>";
  return buffer;}
);

// template --- tmpl-DropboxSubFolder ---
Handlebars.templates['tmpl-DropboxSubFolder'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			";
  stack1 = depth0.is_dir;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n			<div class=\"folderitem\" data-path=\"";
  foundHelper = helpers.path;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.path; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n			<img src=\"https://dt8kf6553cww8.cloudfront.net/static/images/icons/icon_spacer-vflN3BYt2.gif\" \n			alt=\"\" border=\"0\" class=\"sprite sprite_web  s_web_bullet_plus pointer \">\n			<img src=\"https://dt8kf6553cww8.cloudfront.net/static/images/icons/icon_spacer-vflN3BYt2.gif\" \n			alt=\"\" class=\"sprite sprite_web  s_web_folder link-img\"/>\n			\n			<span class=\"foldername\">";
  stack1 = depth0.path;
  foundHelper = helpers.filename;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "filename", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</span>\n			</div>\n			";
  return buffer;}

  buffer += "<div class=\"subfolder itemDiv\">\n		";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.metadata;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.contents;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>";
  return buffer;}
);

// template --- tmpl-DropboxFiles ---
Handlebars.templates['tmpl-DropboxFiles'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<span class=\"searchtitle\">Search-";
  stack1 = depth0.metadata;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.contents;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.length;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + " results</span>\n		<div class=\"input-append commonoperation\" data-path=\"";
  stack1 = depth0.metadata;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.path;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\">\n	 		<input type=\"text\" name=\"search\" class=\"input-block-level searchbox\" placeholder=\"Search dropbox\"/>\n	 		<button type=\"button\" class=\"btn search\">Search</button>\n		</div>\n		";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n		<div class=\"sprite sprite_web s_web_dropbox_32 space pointer\"></div>\n		<span class=\"filepath\">";
  stack1 = depth0.metadata;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.path;
  foundHelper = helpers.filepath;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "filepath", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</span>\n		<div class=\"input-append commonoperation\" data-path=\"";
  stack1 = depth0.metadata;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.path;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\">\n			<img alt=\"Upload\" src=\"https://www.dropbox.com/static/images/icons/icon_spacer.gif\"\n					 class=\"sprite sprite_web s_web_upload_16 upload\">\n			<img alt=\"New folder\" class=\"sprite sprite_web s_web_folder_add \"\n						 src=\"https://www.dropbox.com/static/images/icons/icon_spacer.gif\"/>\n			<img alt=\"Show deleted files\" src=\"https://www.dropbox.com/static/images/icons/icon_spacer.gif\"\n			 class=\"sprite sprite_web ";
  stack1 = depth0.showDeleted;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n	 		<input type=\"text\" name=\"search\" class=\"input-block-level searchbox\" placeholder=\"Search dropbox\"/>\n	 		<button type=\"button\" class=\"btn search\">Search</button>\n		</div>\n		";
  return buffer;}
function program4(depth0,data) {
  
  
  return "s_web_hide-deleted";}

function program6(depth0,data) {
  
  
  return "s_web_show-deleted";}

function program8(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n			<tr data-path=\"";
  foundHelper = helpers.path;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.path; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-dir=\"";
  foundHelper = helpers.is_dir;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.is_dir; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-rev=\"";
  foundHelper = helpers.rev;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.rev; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n				<td>\n					<div>\n						<img class=\"sprite_web s_web_";
  foundHelper = helpers.icon;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.icon; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "_32 pointer space\" data-thumb=\"";
  foundHelper = helpers.thumb_exists;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.thumb_exists; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" src=\"https://www.dropbox.com/static/images/icons/icon_spacer.gif\"/>\n						<span class=\"filename pointer\">";
  stack1 = depth0.path;
  foundHelper = helpers.filename;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "filename", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</span>\n					</div>\n				</td>\n				<td>";
  stack1 = depth0.is_deleted;
  stack2 = depth0.size;
  foundHelper = helpers.filesize;
  stack1 = foundHelper ? foundHelper.call(depth0, stack2, stack1, {hash:{}}) : helperMissing.call(depth0, "filesize", stack2, stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</td>\n				<td>";
  stack1 = depth0.modified;
  foundHelper = helpers.localDate;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "localDate", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</td>\n				<td>\n					<span>\n						<a href=\"dropbox/getFile";
  foundHelper = helpers.path;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.path; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">download</a>\n						";
  stack1 = depth0.is_deleted;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n						<a href=\"javascript:void(0)\" class=\"share\">Share</a>\n						<a href=\"javascript:void(0)\" class=\"copy\">copy</a>\n						<a href=\"javascript:void(0)\" class=\"move\">move</a>\n						";
  stack1 = depth0.is_deleted;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(13, program13, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</span>\n				</td>\n			</tr>\n			";
  return buffer;}
function program9(depth0,data) {
  
  
  return "\n						";}

function program11(depth0,data) {
  
  
  return "\n						<a href=\"javascript:void(0)\" class=\"delete\">delete</a>\n						";}

function program13(depth0,data) {
  
  
  return "\n						<a href=\"javascript:void(0)\" class=\"restore\">restore</a>\n						";}

function program15(depth0,data) {
  
  
  return "\n		<div class=\"emptyfolder\">\n			<img src=\"https://dt8kf6553cww8.cloudfront.net/static/images/add_files_300-vflQxZMgf.jpg\" alt=\"\">\n			<h3>This Folder is empty.</h3>\n		</div>\n		";}

  buffer += "<div class=\"container dropfiles\">\n		";
  stack1 = depth0.metadata;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.search;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		<table class=\"table table-striped\">\n			<tr>\n				<th>Name</th>\n				<th>Size</th>\n				<th>Modified</th>\n				<th>Operation</th>\n			</tr>\n			\n			";
  stack1 = depth0.metadata;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.contents;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(8, program8, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</table>\n		\n		";
  stack1 = depth0.metadata;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.contents;
  foundHelper = helpers.isEmpty;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(15, program15, data)}) : helperMissing.call(depth0, "isEmpty", stack1, {hash:{},inverse:self.noop,fn:self.program(15, program15, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>";
  return buffer;}
);

// template --- tmpl-DropboxScreen ---
Handlebars.templates['tmpl-DropboxScreen'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"container dropboxscreen\">\n	  <div class=\"alert alert-info loading\">\n	  	loading...\n	  </div>\n		<div class=\"tabbable\">\n	 		<ul class=\"nav nav-tabs\">\n	 			<li class=\"active\" data-nav=\"accountInfo\"><a href=\"#\" data-toggle=\"tab\">Account Info</a></li>\n	   		<li data-nav=\"files\"><a href=\"#\" data-toggle=\"tab\">Files</a></li>\n	 		</ul>\n			<div class=\"tab-content\">\n				<div class=\"alert alert-info\">\n					Tring to load data,Please wait... \n				</div>\n      </div>\n 	 	</div>\n	</div>";}
);

// template --- tmpl-Dropdown ---
Handlebars.templates['tmpl-Dropdown'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "width:";
  foundHelper = helpers.width;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.width; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "px";
  return buffer;}

  buffer += "<div class=\"Dropdown\" style=\"left:";
  foundHelper = helpers.left;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.left; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "px;top:";
  foundHelper = helpers.top;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.top; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "px;";
  stack1 = depth0.width;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n		<div class=\"Dropdown-main\">\n		</div>\n	</div>";
  return buffer;}
);

// template --- tmpl-Dropdown-item ---
Handlebars.templates['tmpl-Dropdown-item'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"item\" data-name=\"";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n  	<div class=\"item-content\">\n		";
  foundHelper = helpers.label;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.label; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\n  	</div>\n	</div>";
  return buffer;}
);

// template --- tmpl-FacebookContacts ---
Handlebars.templates['tmpl-FacebookContacts'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"FacebookContacts\">\n<div class=\"form-search\">\n  <input type=\"text\" class=\"input-large search-query\">\n  <button type=\"submit\" class=\"btn formSearch\">Search</button>\n</div>\n	  <div class=\"Friends-tableListContain\">\n	  <table class=\"table table-striped\">\n	        <tbody class=\"listItem\">\n	        </tbody>\n	      </table>\n	    </div>\n\n <div class=\"Contact-detail-dialog modal hide \">\n <div class=\"modal-header\">\n    <h3>Contact information</h3>\n  </div>\n  <div class=\"modal-body\">\n  \n  </div>\n   <div class=\"modal-footer\">\n    <a href=\"#\" class=\"close btn\">Close</a>\n  </div>\n</div>\n\n</div>";}
);

// template --- tmpl-FacebookContact-detail ---
Handlebars.templates['tmpl-FacebookContact-detail'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<ul class=\"nav nav-tabs\">\n  <li class=\"active\" data-type='info'>\n    <a href=\"#\" >Home</a>\n  </li>\n  <li data-type='feed'><a href=\"#\" >Feeds</a></li>\n  <li data-type='publish'><a href=\"#\" >Publish</a></li>\n</ul>\n\n<table class=\"infotable table  table-striped\">\n		<tr>\n			<td>Name</td>\n			<td>";
  foundHelper = helpers.finamerstName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.finamerstName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n		</tr>\n		<tr>\n			<td>FirstName</td>\n			<td>";
  foundHelper = helpers.firstName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n		</tr>\n		<tr>\n			<td>MiddleName</td>\n			<td>";
  foundHelper = helpers.middleName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.middleName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n		</tr>\n		<tr>\n			<td>LastName</td>\n			<td>";
  foundHelper = helpers.lastName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n		</tr>\n		<tr>\n			<td>HometownName</td>\n			<td>";
  foundHelper = helpers.hometownName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.hometownName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n		</tr>\n		<tr>\n			<td>Birthday</td>\n			<td>";
  foundHelper = helpers.birthday;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.birthday; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n		</tr>\n		<tr>\n			<td>RelationshipStatus</td>\n			<td>";
  foundHelper = helpers.relationshipStatus;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.relationshipStatus; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n		</tr>\n		<tr>\n			<td>Email</td>\n			<td>";
  foundHelper = helpers.email;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n		</tr>\n		<tr>\n			<td>Link</td>\n			<td>";
  foundHelper = helpers.link;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.link; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n		</tr>\n	</table>\n	<div class=\"feedList hide\">\n	</div>";
  return buffer;}
);

// template --- tmpl-FacebookEvents ---
Handlebars.templates['tmpl-FacebookEvents'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"FacebookEvents\">\n<table class=\"table table-striped\">\n			<tr>\n				<td colspan=\"2\">\n					<div class=\"well form-search \">\n					\n					<div class=\"control-group\">\n    <label>Name:</label>\n    <div class=\"controls\">\n      <input type=\"text\" name=\"name\" class=\"input-block-level nameInput\"   placeholder=\"input name\"/>\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <label>Start time:</label>\n    <div class=\"controls\">\n      <input type=\"text\" name=\"start_time\" class=\"input-block-level timeInput\"   placeholder=\"2013-2-1\"/>\n    </div>\n  </div>\n					\n					</div>\n					<div>\n						<button type=\"submit\" class=\"btn postBtn btn-primary\">Post Event</button>\n					</div>\n				</td>\n			</tr>\n		</table>\n\n\n	  <div class=\"Posts-tableListContain\">\n	  <table class=\"table table-striped\">\n	        <tbody class=\"listItem\">\n	        </tbody>\n	      </table>\n	    </div>\n	    \n	 \n	    \n</div>";}
);

// template --- tmpl-FacebookFeeds ---
Handlebars.templates['tmpl-FacebookFeeds'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"FacebookFeeds\">\n<div class=\"form-search\" >\n  <textarea rows=\"3\" class=\"post\" placeholder=\"Enter new message\"></textarea>\n  <button type=\"submit\" class=\"btn postBtn btn-primary\">Post Message</button>\n</div>\n	  <div class=\"Posts-tableListContain\">\n	  <table class=\"table table-striped\">\n	        <tbody class=\"listItem\">\n	        </tbody>\n	      </table>\n	    </div>\n	    \n	    \n</div>";}
);

// template --- tmpl-FacebookFeeds-detail ---
Handlebars.templates['tmpl-FacebookFeeds-detail'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<table class=\"table  table-striped\">\n		<tr>\n			<td>Name</td>\n			<td>";
  foundHelper = helpers.finamerstName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.finamerstName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n		</tr>\n	</table>";
  return buffer;}
);

// template --- tmpl-FacebookFriends ---
Handlebars.templates['tmpl-FacebookFriends'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"FacebookFriends\">\n<div class=\"form-search\">\n  <input type=\"text\" class=\"input-large search-query\">\n  <button type=\"submit\" class=\"btn formSearch\">Search</button>\n</div>\n	  <div class=\"Friends-tableListContain\">\n	  <table class=\"table table-striped\">\n	        <tbody class=\"listItem\">\n	        </tbody>\n	      </table>\n	    </div>\n	    \n\n <div class=\"Friend-detail modal hide \">\n   <div class=\"modal-header\">\n    <h3>Friend information</h3>\n  </div>\n  <div class=\"modal-body\">\n  \n  </div>\n   <div class=\"modal-footer\">\n    <a href=\"#\" class=\"close btn\">Close</a>\n  </div>\n</div>\n\n\n</div>";}
);

// template --- tmpl-FacebookFriend-detail ---
Handlebars.templates['tmpl-FacebookFriend-detail'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<table class=\"table table-striped\">\n		<tr >\n			<td >Name</td>\n			<td>";
  foundHelper = helpers.finamerstName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.finamerstName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n		</tr>\n		<tr>\n			<td>FirstName</td>\n			<td>";
  foundHelper = helpers.firstName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n		</tr>\n		<tr>\n			<td>MiddleName</td>\n			<td>";
  foundHelper = helpers.middleName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.middleName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n		</tr>\n		<tr>\n			<td>LastName</td>\n			<td>";
  foundHelper = helpers.lastName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n		</tr>\n		<tr>\n			<td>HometownName</td>\n			<td>";
  foundHelper = helpers.hometownName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.hometownName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n		</tr>\n		<tr>\n			<td>Birthday</td>\n			<td>";
  foundHelper = helpers.birthday;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.birthday; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n		</tr>\n		<tr>\n			<td>RelationshipStatus</td>\n			<td>";
  foundHelper = helpers.relationshipStatus;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.relationshipStatus; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n		</tr>\n		<tr>\n			<td>Email</td>\n			<td>";
  foundHelper = helpers.email;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n		</tr>\n		<tr>\n			<td>Link</td>\n			<td>";
  foundHelper = helpers.link;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.link; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n		</tr>\n	</table>";
  return buffer;}
);

// template --- tmpl-FacebookNotes ---
Handlebars.templates['tmpl-FacebookNotes'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"FacebookNotes\">\n<table class=\"table table-striped\">\n			<tr>\n				<td colspan=\"2\">\n					<div class=\"well form-search\">\n					\n						<div class=\"control-group\">\n					    <label>Subject:</label>\n					    <div class=\"controls\">\n					      <input type=\"text\" name=\"subject\" class=\"input-block-level subjectInput\"   placeholder=\"input subject\"/>\n					    </div>\n					  </div>\n					  <div class=\"control-group\">\n					    <label>Message:</label>\n					    <div class=\"controls\">\n					    	<textarea rows=\"4\" name=\"msg\" class=\"msgInput\"   placeholder=\"input message\"></textarea>\n					    </div>\n					  </div>\n						\n					<div>\n						<button type=\"submit\" class=\"btn postBtn btn-primary\">Post Note</button>\n					</div>\n				</td>\n			</tr>\n		</table>\n\n\n	  <div class=\"Posts-tableListContain\">\n	  <table class=\"table table-striped\">\n	        <tbody class=\"listItem\">\n	        </tbody>\n	      </table>\n	    </div>\n	    \n</div>";}
);

// template --- tmpl-FacebookPhotos ---
Handlebars.templates['tmpl-FacebookPhotos'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"FacebookPhotos\">\n<table class=\"table table-striped\">\n			<tr>\n				<td colspan=\"2\">\n					<div class=\"well form-search\">\n					 <div class=\"control-group\">\n					    <label>Choose photo to upload:</label>\n					    <div class=\"controls\">\n					      <input name=\"file\" type=\"file\" class=\"input-block-level fileInput\" placeholder=\"Upload file\"/>\n					    </div>\n					  </div>\n						<div class=\"control-group\">\n					    <label>Message:</label>\n					    <div class=\"controls\">\n					   	  <textarea rows=\"4\" name=\"msg\" class=\"msgInput\"   placeholder=\"input message\"></textarea>\n					    </div>\n					  </div>\n					<div>\n						<button type=\"submit\" class=\"btn postBtn btn-primary\">Post Photo</button>\n					</div>\n				</td>\n			</tr>\n		</table>\n\n\n	  <div class=\"Posts-tableListContain\">\n	  <table class=\"table table-striped\">\n	        <tbody class=\"listItem\">\n	        </tbody>\n	      </table>\n	    </div>\n	    \n</div>";}
);

// template --- tmpl-FacebookQuestions ---
Handlebars.templates['tmpl-FacebookQuestions'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"FacebookQuestions\">\n<table class=\"table table-striped\">\n			<tr>\n				<td colspan=\"2\">\n					<div class=\"well form-search\">\n					 <div class=\"control-group\">\n					    <label>Choose photo to upload:</label>\n					    <div class=\"controls\">\n					      <input name=\"file\" type=\"file\" class=\"input-block-level fileInput\" placeholder=\"Upload file\"/>\n					    </div>\n					  </div>\n						<div class=\"control-group\">\n					    <label>Message:</label>\n					    <div class=\"controls\">\n					   	  <textarea rows=\"4\" name=\"msg\" class=\"msgInput\"   placeholder=\"input message\"></textarea>\n					    </div>\n					  </div>\n					<div>\n						<button type=\"submit\" class=\"btn postBtn btn-primary\">Post Photo</button>\n					</div>\n				</td>\n			</tr>\n		</table>\n\n\n	  <div class=\"Posts-tableListContain\">\n	  <table class=\"table table-striped\">\n	        <tbody class=\"listItem\">\n	        </tbody>\n	      </table>\n	    </div>\n	    \n</div>";}
);

// template --- tmpl-FacebookScreen ---
Handlebars.templates['tmpl-FacebookScreen'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"container\">\n		<div class=\"tabbable\">\n	 		<ul class=\"nav nav-tabs\">\n	 			<li class=\"active menu\" data-nav=\"friend\"><a href=\"#\">Friends</a></li>\n        <li class=\"menu\" data-nav=\"contact\"><a href=\"#\">Contacts</a></li>\n        <li class=\"menu\" data-nav=\"feed\"><a href=\"#\">Feeds</a></li>\n        <li class=\"menu\" data-nav=\"photo\"><a href=\"#\">Photo</a></li>\n        <li class=\"menu\" data-nav=\"note\"><a href=\"#\">Note</a></li>\n        <li class=\"menu\" data-nav=\"event\"><a href=\"#\">Event</a></li>\n	 		</ul>\n			<div class=\"FacebookScreen-content\">\n				<div class=\"alert alert-info\">\n					Tring to load data,Please wait... \n				</div>\n      </div>\n	  </div>\n	   <div class=\"result modal hide \">\n  <div class=\"modal-body\">\n  <div class=\"alert alert-success\">\n  	Operation success!\n	</div>\n	  </div>\n	</div> \n	</div>";}
);

// template --- tmpl-FoursquareRecentCheckins ---
Handlebars.templates['tmpl-FoursquareRecentCheckins'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"container FoursquareRecentCheckins\">\n  \n  \n</div>";}
);

// template --- tmpl-FoursquareScreen ---
Handlebars.templates['tmpl-FoursquareScreen'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"FoursquareScreen\">\n    <div class=\"FoursquareScreen-top\">\n      <ul class=\"nav nav-tabs\">\n        <li class=\"active menu\" data-nav=\"userInfo\"><a href=\"#\">User Infomation</a></li>\n        <li class=\"menu\" data-nav=\"userFriends\"><a href=\"#\">User Friends</a></li>\n        <li class=\"menu\" data-nav=\"venuesCategories\"><a href=\"#\">Venues Categories</a></li>\n        <li class=\"menu\" data-nav=\"usersBadges\"><a href=\"#\">Users Badges</a></li>\n        <li class=\"menu\" data-nav=\"search\"><a href=\"#\">Search<i class=\"icon-chevron-down\"></i></a></li>\n      </ul>\n    </div>\n    <div class=\"FoursquareScreen-content\">\n      \n    </div>\n  </div>";}
);

// template --- tmpl-FoursquareSearchUser ---
Handlebars.templates['tmpl-FoursquareSearchUser'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"container FoursquareSearchUser\">\n  \n  \n</div>";}
);

// template --- tmpl-FoursquareSpecialSearch ---
Handlebars.templates['tmpl-FoursquareSpecialSearch'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"container FoursquareSpecialSearch\">\n  \n  \n</div>";}
);

// template --- tmpl-FoursquareUserFriends ---
Handlebars.templates['tmpl-FoursquareUserFriends'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"container FoursquareUserFriends\">\n  \n  \n</div>";}
);

// template --- tmpl-FoursquareUserInfo ---
Handlebars.templates['tmpl-FoursquareUserInfo'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"container FoursquareUserInfo\"> \n		<table class=\"table table-striped\">\n			<tr>\n				<td>Email</td>\n				<td>";
  stack1 = depth0.contact;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.email;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</td>\n			</tr>			<tr>\n				<td>User Name:</td>\n				<td>";
  foundHelper = helpers.lastName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + ".";
  foundHelper = helpers.firstName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n			</tr>\n            <tr>\n            <td>Avatar:</td>\n                <td><image src=\"";
  foundHelper = helpers.photo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.photo; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"avatar\"/></td>\n            </tr>\n            <td>Gender:</td>\n                <td>";
  foundHelper = helpers.gender;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.gender; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n            </tr>\n		</table>\n	</div>";
  return buffer;}
);

// template --- tmpl-FoursquareUsersBadges ---
Handlebars.templates['tmpl-FoursquareUsersBadges'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"container FoursquareUsersBadges\">\n  \n  \n</div>";}
);

// template --- tmpl-FoursquareVenuesCategories ---
Handlebars.templates['tmpl-FoursquareVenuesCategories'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"container FoursquareVenuesCategories\">\n  \n  \n</div>";}
);

// template --- tmpl-FoursquareVenuesExplore ---
Handlebars.templates['tmpl-FoursquareVenuesExplore'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"container FoursquareVenuesExplore\">\n  \n  \n</div>";}
);

// template --- tmpl-FoursquareVenuesSearch ---
Handlebars.templates['tmpl-FoursquareVenuesSearch'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"container FoursquareVenuesSearch\">\n  \n  \n</div>";}
);

// template --- tmpl-FoursquareVenuesTrending ---
Handlebars.templates['tmpl-FoursquareVenuesTrending'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"container FoursquareVenuesTrending\">\n  \n  \n</div>";}
);

// template --- tmpl-GithubCommit ---
Handlebars.templates['tmpl-GithubCommit'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n				<tr>\n					<td class=\"content\">\n						<div class=\"meta\">";
  stack1 = depth0.filename;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</div>\n						<div>";
  foundHelper = helpers.additions;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.additions; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " additions & ";
  foundHelper = helpers.changes;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.changes; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " changes & ";
  foundHelper = helpers.deletions;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.deletions; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " deletions</div>\n						<div><pre>";
  foundHelper = helpers.patch;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.patch; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</pre></div>\n					</td>\n				</tr>\n				";
  return buffer;}

  buffer += "<div class=\"container githubCommit\">\n		<table class=\"table\">\n			<thead>\n				<tr class=\"header\">\n					<th>\n					";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.commit;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.message;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\n					</th>\n				</tr>\n			</thead>\n			<tbody>\n				";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.files;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</tbody>\n		</table>\n	</div>";
  return buffer;}
);

// template --- tmpl-GithubCommits ---
Handlebars.templates['tmpl-GithubCommits'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n				<tr data-sha=\"";
  foundHelper = helpers.sha;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.sha; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n					<td class=\"message\">\n						<div><span class=\"messageTitle\">";
  stack1 = depth0.commit;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.message;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</span></div>\n						<div class=\"author\">";
  stack1 = depth0.commit;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.committer;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "&nbsp;authored&nbsp;";
  stack1 = depth0.commit;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.committer;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.date;
  foundHelper = helpers.date;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "date", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</div>\n					</td>\n					<td class=\"sha\">\n						<span>";
  foundHelper = helpers.sha;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.sha; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span>\n					</td>\n				</tr>\n				";
  return buffer;}

  buffer += "<div class=\"container githubCommits\">\n		<table class=\"table\" data-name=\"";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-login=\"";
  foundHelper = helpers.login;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n			<thead>\n				<tr class=\"header\">\n					<th colspan=\"2\">\n						Commits History for ";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\n					</th>\n				</tr>\n			</thead>\n			<tbody>\n				";
  stack1 = depth0.commits;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</tbody>\n		</table>\n	</div>";
  return buffer;}
);

// template --- tmpl-GithubDialog ---
Handlebars.templates['tmpl-GithubDialog'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n				<div id=\"filecontent\" style=\"height:100%;\">\n					<div class=\"files\" data-repo=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.repo;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\">\n						";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.files;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</div>\n					";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.readme;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.content;
  foundHelper = helpers.notEqual;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "", {hash:{},inverse:self.noop,fn:self.program(7, program7, data)}) : helperMissing.call(depth0, "notEqual", stack1, "", {hash:{},inverse:self.noop,fn:self.program(7, program7, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "				\n				</div>\n			 ";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n							";
  stack1 = depth0.type;
  foundHelper = helpers.equal;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "dir", {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data)}) : helperMissing.call(depth0, "equal", stack1, "dir", {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n						";
  return buffer;}
function program3(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n							<div>\n								<span data-path=\"";
  foundHelper = helpers.path;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.path; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-type=\"";
  foundHelper = helpers.type;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"filename\">\n								  <i class=\"icon-folder-close fileitem\"></i><a href=\"javascript:void(0)\">";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a>\n								  <i class=\"download icon-download\"></i>\n								</span>\n							</div>\n							";
  return buffer;}

function program5(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n							<div>\n								<span data-path=\"";
  foundHelper = helpers.path;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.path; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-type=\"";
  foundHelper = helpers.type;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"filename\">\n									<i class=\"icon-file fileitem\"></i><a href=\"javascript:void(0)\">";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a>\n								</span>\n							</div>\n							";
  return buffer;}

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n 					<span>readme.md</span>\n 					<div><pre>";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.readme;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.content;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</pre></div>\n 					";
  return buffer;}

function program9(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n				 ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.type;
  foundHelper = helpers.equal;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "createDownload", {hash:{},inverse:self.noop,fn:self.program(10, program10, data)}) : helperMissing.call(depth0, "equal", stack1, "createDownload", {hash:{},inverse:self.noop,fn:self.program(10, program10, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			 ";
  return buffer;}
function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				 <div>\n				 	<div class=\"downloaditems\" data-repo=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.repo;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\">\n				 		";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.downloads;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(11, program11, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				 	</div>	\n						<input type=\"file\" name=\"download\" data-repo=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.repo;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\"/>\n						<div class=\"dialogBtns\">\n							<button class=\"btn btn-primary createdownloadbtn\">Create</button>\n						</div>\n				 </div>\n				 ";
  return buffer;}
function program11(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n				 			<div class=\"downloaditem\">\n				 				<a href=\"";
  foundHelper = helpers.htmlUrl;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.htmlUrl; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a>\n				 				<span>";
  foundHelper = helpers.downloadCount;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.downloadCount; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span>\n				 				<a href=\"javascript:void(0)\" class=\"delete\" data-repoId=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">Delete</a>\n				 			</div>\n				 		";
  return buffer;}

  buffer += "<div class=\"github\">\n	  <div class=\"dialogBackground\">\n		</div>\n		<div class=\"dialogContent\" style=\"left:";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.layout;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.left;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + ";top:";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.layout;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.top;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + ";width:";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.layout;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.width;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + ";height:";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.layout;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.height;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\">\n			<div class=\"dialogHead\">\n				<span class=\"dialogTitle\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.title;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</span>\n				<span class=\"download\"><a href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.archiveLink;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\">download Repository</a></span>\n				<span class=\"close dialogBtns dialogCloseBtn\">&times;</span>\n			</div>\n			<div class=\"dialogBody\">\n				";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.type;
  foundHelper = helpers.equal;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "showRepoDetails", {hash:{},inverse:self.program(9, program9, data),fn:self.program(1, program1, data)}) : helperMissing.call(depth0, "equal", stack1, "showRepoDetails", {hash:{},inverse:self.program(9, program9, data),fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</div>\n		</div>\n	</div>";
  return buffer;}
);

// template --- tmpl-GithubFiles ---
Handlebars.templates['tmpl-GithubFiles'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n	<div class=\"files\" data-repo=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.repo;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\">\n		";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.files;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n	";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.readme;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.content;
  foundHelper = helpers.notEqual;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "", {hash:{},inverse:self.noop,fn:self.program(7, program7, data)}) : helperMissing.call(depth0, "notEqual", stack1, "", {hash:{},inverse:self.noop,fn:self.program(7, program7, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "	\n	";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n			";
  stack1 = depth0.type;
  foundHelper = helpers.equal;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "dir", {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data)}) : helperMissing.call(depth0, "equal", stack1, "dir", {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  return buffer;}
function program3(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n			<div>\n				<span data-path=\"";
  foundHelper = helpers.path;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.path; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-type=\"";
  foundHelper = helpers.type;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"filename\">\n				  <i class=\"icon-folder-close fileitem\"></i><a href=\"javascript:void(0)\">";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a>\n				</span>\n			</div>\n			";
  return buffer;}

function program5(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n			<div>\n				<span data-path=\"";
  foundHelper = helpers.path;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.path; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-type=\"";
  foundHelper = helpers.type;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"filename\">\n					<i class=\"icon-file fileitem\"></i><a href=\"javascript:void(0)\">";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a>\n				</span>\n			</div>\n			";
  return buffer;}

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	 <span>readme.md</span>\n	 <div><pre>";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.readme;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.content;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</pre></div>\n	";
  return buffer;}

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<span>";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.filename;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</span>\n	<div class=\"code\"><pre>";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.file;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.content;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</pre></div>\n	";
  return buffer;}

  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.isDir;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.program(9, program9, data),fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }}
);

// template --- tmpl-GithubDownloads ---
Handlebars.templates['tmpl-GithubDownloads'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n	<div class=\"downloaditem\">\n		<a href=\"";
  foundHelper = helpers.htmlUrl;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.htmlUrl; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a>\n		<span>";
  foundHelper = helpers.downloadCount;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.downloadCount; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span>\n		<a href=\"javascript:void(0)\" class=\"delete\" data-repoId=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">Delete</a>\n	</div>\n	";
  return buffer;}

  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.downloads;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }}
);

// template --- tmpl-GithubRepositories ---
Handlebars.templates['tmpl-GithubRepositories'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "\n			\n			";}

function program3(depth0,data) {
  
  
  return "\n			<tr>\n				<td colspan=\"2\" class=\"form-inline\">\n					<input type=\"text\" name=\"newRepository\" class=\"input-block-level repositoryName\" placeholder=\"type the repository name\"/>\n					<input type=\"text\" name=\"description\" class=\"input-block-level description\" placeholder=\"description for repository\"/> \n					<button class=\"btn btn-primary createRepository\">Create repository</button>\n					<img class=\"githubloading hide create\" src=\"https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif\"/>\n				</td>\n			</tr>\n			";}

function program5(depth0,data,depth1) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n			<tr>\n				<td class=\"span12\" data-repository-id=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-login=\"";
  stack1 = depth0.owner;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.login;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\" data-repository-name=\"";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-repository-description=\"";
  foundHelper = helpers.description;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n					<span class=\"title\">\n						";
  stack1 = depth0['private'];
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n						<span class=\"reponame\" data-repo=\"";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n							Name:";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\n						</span>\n						<span>\n							<i class=\"icon-edit iconHover\"></i>\n						</span>\n						<span class=\"commits\">Commits</span>\n						<span class=\"events\">Events</span>\n						<span class=\"createdownload\">Downloads</span>\n						<span class=\"forks\">Forks</span>\n					</span>\n				  <div>\n				  ";
  stack1 = depth1.showCreate;
  foundHelper = helpers.equal;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "none", {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data)}) : helperMissing.call(depth0, "equal", stack1, "none", {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				  </div>\n				</td>\n			</tr>\n			";
  return buffer;}
function program6(depth0,data) {
  
  
  return "\n						<span class=\"alert alert-waring padding8\">Private</span>\n						";}

function program8(depth0,data) {
  
  
  return "\n						<span class=\"alert alert-info padding8\">Public</span>\n						";}

function program10(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n				  	<div><label class=\"detailsTitle\">watchers</label><span class=\"detailsContent\">";
  foundHelper = helpers.watchers;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.watchers; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span></div>\n				  	<div><label class=\"detailsTitle\">language</label><span class=\"detailsContent\">";
  foundHelper = helpers.language;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.language; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span></div>\n				  	<div><label class=\"detailsTitle\">Pushed Date</label><span class=\"detailsContent\">";
  stack1 = depth0.pushedAt;
  foundHelper = helpers.date;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "date", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</span></div>\n				  	<div><label class=\"detailsTitle\">Create Date</label><span class=\"detailsContent\">";
  stack1 = depth0.createdAt;
  foundHelper = helpers.date;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "date", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</span></div>\n				  	<div><label class=\"detailsTitle\">description</label><span class=\"detailsContent\">";
  foundHelper = helpers.description;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span></div>\n				  ";
  return buffer;}

function program12(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n				  	<div><label class=\"detailsTitle\">url</label><span class=\"detailsContent\">";
  foundHelper = helpers.url;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span></div>\n				  	<div><label class=\"detailsTitle\">Html url</label><span class=\"detailsContent\">";
  foundHelper = helpers.htmlUrl;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.htmlUrl; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span></div>\n				  	<div><label class=\"detailsTitle\">SVN url</label><span class=\"detailsContent\">";
  foundHelper = helpers.svnUrl;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.svnUrl; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span></div>\n				  	<div><label class=\"detailsTitle\">Git url</label><span class=\"detailsContent\">";
  foundHelper = helpers.gitUrl;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.gitUrl; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span></div>\n				  	<div><label class=\"detailsTitle\">Mirror Url</label><span class=\"detailsContent\">";
  foundHelper = helpers.mirrorUrl;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.mirrorUrl; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span></div>\n				  	<div><label class=\"detailsTitle\">watchers</label><span class=\"detailsContent\">";
  foundHelper = helpers.watchers;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.watchers; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span></div>\n				  	<div><label class=\"detailsTitle\">language</label><span class=\"detailsContent\">";
  foundHelper = helpers.language;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.language; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span></div>\n				  	<div><label class=\"detailsTitle\">Pushed Date</label><span class=\"detailsContent\">";
  stack1 = depth0.pushedAt;
  foundHelper = helpers.date;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "date", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</span></div>\n				  	<div><label class=\"detailsTitle\">Create Date</label><span class=\"detailsContent\">";
  stack1 = depth0.createdAt;
  foundHelper = helpers.date;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "date", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</span></div>\n				  	<div><label class=\"detailsTitle\">Update Date</label><span class=\"detailsContent\">";
  stack1 = depth0.updatedAt;
  foundHelper = helpers.date;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "date", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</span></div>\n				  	<div><label class=\"detailsTitle\">Has wiki</label><span class=\"detailsContent\">";
  foundHelper = helpers.hasWiki;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.hasWiki; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span></div>\n				  	<div><label class=\"detailsTitle\">open issues</label><span class=\"detailsContent\">";
  foundHelper = helpers.openIssues;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.openIssues; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span></div>\n				  	<div><label class=\"detailsTitle\">description</label><span class=\"detailsContent\">";
  foundHelper = helpers.description;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span></div>\n				  ";
  return buffer;}

  buffer += "<div class=\"container githubRepositories\"> \n		<table class=\"table table-striped\">\n			";
  stack1 = depth0.showCreate;
  foundHelper = helpers.equal;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "none", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data)}) : helperMissing.call(depth0, "equal", stack1, "none", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		  ";
  stack1 = depth0.repositories;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(program5, data, depth0)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</table>\n	</div>";
  return buffer;}
);

// template --- tmpl-GithubRepositoryEdit ---
Handlebars.templates['tmpl-GithubRepositoryEdit'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"github\">\n	  <div class=\"dialogBackground\">\n		</div>\n		<div class=\"dialogContent\" style=\"left:";
  stack1 = depth0.layout;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.left;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + ";top:";
  stack1 = depth0.layout;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.top;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + ";width:";
  stack1 = depth0.layout;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.width;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + ";height:";
  stack1 = depth0.layout;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.height;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\">\n			<div class=\"dialogHead\">\n				<span class=\"dialogTitle\">Edit repository</span>\n				<span class=\"close dialogBtns dialogCloseBtn\">&times;</span>\n			</div>\n			<div class=\"dialogBody\" data-repository-id=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-login=\"";
  foundHelper = helpers.login;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n				<input type=\"text\" name=\"repositoryName\" value=\"";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"input-block-level\" disabled placeholder=\"type the repository name\"/>\n				<input type=\"text\" name=\"description\" value=\"";
  foundHelper = helpers.description;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"input-block-level\" placeholder=\"description for the repository\"/>\n				<div class=\"dialogBtns\">\n					<img class=\"githubloading hide save\" src=\"https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif\"/>\n					<button class=\"btn btn-primary save\">Save</button>\n					<button class=\"btn btn-primary cancel\">Cancel</button>\n			 </div>\n			</div>\n		</div>\n	</div>";
  return buffer;}
);

// template --- tmpl-GithubScreen ---
Handlebars.templates['tmpl-GithubScreen'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"container\">\n		<div class=\"tabbable\">\n	 		<ul class=\"nav nav-tabs\">\n	 			<li class=\"active\" data-nav=\"UserInformation\"><a href=\"#\" data-toggle=\"tab\">User Information</a></li>\n	   		<li data-nav=\"Repositories\"><a href=\"#\" data-toggle=\"tab\">Repositories</a></li>\n	   		<li data-nav=\"Search\"><a href=\"#\" data-toggle=\"tab\">Search</a></li>\n	 		</ul>\n			<div class=\"tab-content\">\n				<div class=\"alert alert-info\">\n					Tring to load data,Please wait... \n				</div>\n      </div>\n	  </div>\n	</div>";}
);

// template --- tmpl-GithubSearch ---
Handlebars.templates['tmpl-GithubSearch'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"container githubRepositories\">\n		<div class=\"leftalign\">\n			<h3>Search Repositories</h3>\n		</div>\n  	<div class=\"input-append rightalign\">\n			<input type=\"text\" class=\"input-block-level searchinput\" name=\"repoName\"/>\n			<button class=\"btn btn-primary search\">Search</button>\n		</div>\n		\n		<div id=\"searchResult\">\n			\n		</div>\n	</div>";}
);

// template --- tmpl-GithubUserInfo ---
Handlebars.templates['tmpl-GithubUserInfo'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n					<div data-email=\"";
  foundHelper = helpers.email;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n						<span class=\"emailName\">";
  foundHelper = helpers.email;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span>\n						<button class=\"btn btn-mini delete\">Delete</button>\n						<img class=\"githubloading hide deleting\" src=\"https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif\"/>\n					</div>\n					";
  return buffer;}

  buffer += "<div class=\"container githubUserInfo\"> \n		<table class=\"table table-striped\">\n			<tr>\n				<td>User Name:</td>\n				<td>";
  stack1 = depth0.userInfo;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.login;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</td>\n			</tr>\n			<tr>\n				<td>Avatar:</td>\n				<td><image src=\"";
  stack1 = depth0.userInfo;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.avatar_url;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\" class=\"avatar\"/></td>\n			</tr>\n			<tr>\n				<td>Home Page:</td>\n				<td><a href=\"";
  stack1 = depth0.userInfo;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.html_url;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\">";
  stack1 = depth0.userInfo;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.html_url;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</a></td>\n			</tr>\n			<tr>\n				<td>private_repos:</td>\n				<td>";
  stack1 = depth0.userInfo;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.total_private_repos;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</td>\n			</tr>\n			<tr>\n				<td>public_gists:</td>\n				<td>";
  stack1 = depth0.userInfo;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.public_gists;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</td>\n			</tr>\n			<tr>\n				<td>followers:</td>\n				<td>";
  stack1 = depth0.userInfo;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.followers;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</td>\n			</tr>\n			<tr>\n				<td class=\"verticalMiddle\">Emails:</td>\n				<td id=\"emailPlace\" class=\"span12\">\n					";
  stack1 = depth0.emails;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				</td>\n			</tr>\n			<tr>\n				<td>created Date:</td>\n				<td>";
  stack1 = depth0.userInfo;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.created_at;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</td>\n			</tr>\n			<tr>\n				<td>updated Date:</td>\n				<td>";
  stack1 = depth0.userInfo;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.updated_at;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</td>\n			</tr>\n			<tr>\n				<td colspan=\"2\">\n					<div class=\"well form-search\">\n						<label>Add another email address:</label>\n						<input name=\"email\" type=\"text\" class=\"input-block-level emailInput\" placeholder=\"Type email address\"/>\n						<button class=\"btn btn-primary add\">Add</button>\n						<img class=\"githubloading hide adding\" src=\"https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif\"/>\n					</div>\n				</td>\n			</tr>\n		</table>\n	</div>";
  return buffer;}
);

// template --- tmpl-GoogleContacts ---
Handlebars.templates['tmpl-GoogleContacts'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"contacts-container\">\n  \n  \n</div>";}
);

// template --- tmpl-GoogleFolders ---
Handlebars.templates['tmpl-GoogleFolders'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"folders-container\">\n  \n  \n</div>";}
);

// template --- tmpl-GoogleGroups ---
Handlebars.templates['tmpl-GoogleGroups'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"groups-container\">\n  \n  \n</div>";}
);

// template --- tmpl-GoogleMailInfo ---
Handlebars.templates['tmpl-GoogleMailInfo'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"MailInfo modal\">\n		<div class=\"MailInfo-header modal-header\">\n			<div class=\"close btnClose\"><i class=\"icon-remove\"></i></div>\n			<h3>";
  foundHelper = helpers.subject;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.subject; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h3>\n		</div>\n		<div class=\"MailInfo-content modal-body\">\n			<div class=\"form-horizontal\">\n				<div class=\"control-group\">\n					<div class=\"control-label\">Subject:</div>\n					<div class=\"controls\">\n						";
  foundHelper = helpers.subject;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.subject; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\n					</div>\n				</div>\n				<div class=\"control-group\">\n					<div class=\"control-label\">From:</div>\n					<div class=\"controls\">\n						";
  foundHelper = helpers.from;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.from; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\n					</div>\n				</div>\n				<div class=\"control-group\">\n					<div class=\"control-label\">Date:</div>\n					<div class=\"controls\">\n						";
  foundHelper = helpers.date;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\n					</div>\n				</div>\n				<div class=\"control-group\">\n					<div class=\"control-label\">Content:</div>\n					<div class=\"controls\">\n						<iframe id=\"mailInfo\" src=\"data:text/html;charset=utf-8,";
  foundHelper = helpers.content;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.content; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"  />\n					</div>\n				</div>\n			</div>\n		</div>\n		<div class=\"MailInfo-footer modal-footer\">\n			<div class=\"btn btnClose\">Close</div>\n		</div>\n	</div>";
  return buffer;}
);

// template --- tmpl-GoogleMails ---
Handlebars.templates['tmpl-GoogleMails'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"mails-container\">\n  \n  \n</div>";}
);

// template --- tmpl-GoogleMailSend ---
Handlebars.templates['tmpl-GoogleMailSend'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += " value=\"re: ";
  foundHelper = helpers.subject;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.subject; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" ";
  return buffer;}

  buffer += "<div class=\"MailSend modal\">\n        <div class=\"MailSend-header modal-header\">\n            <div class=\"close btnClose\"><i class=\"icon-remove\"></i></div>\n            <h3>New Mail</h3>\n        </div>\n        <div class=\"MailSend-content modal-body\">\n            <div class=\"form-horizontal\">\n                <div class=\"control-group\">\n                    <div class=\"control-label\">Subject:</div>\n                    <div class=\"controls\">\n                        <input type='text' name=\"subject\" ";
  stack1 = depth0.subject;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n                    </div>\n                </div>\n                <div class=\"control-group\">\n                    <div class=\"control-label\">To:</div>\n                    <div class=\"controls\">\n                        <input type='text' name=\"to\" value=\"";
  foundHelper = helpers.from;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.from; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" />\n                    </div>\n                </div>\n                <div class=\"control-group\">\n                    <div class=\"control-label\">Content:</div>\n                    <div class=\"controls\">\n                        <textarea name=\"content\">";
  foundHelper = helpers.content;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.content; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</textarea>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"MailSend-footer modal-footer\">\n            <div class=\"btn btn-primary btnCreate\">Send</div>\n            <div class=\"btn btnClose\">Close</div>\n        </div>\n    </div>";
  return buffer;}
);

// template --- tmpl-GoogleScreen ---
Handlebars.templates['tmpl-GoogleScreen'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"GoogleScreen\">\n    <div class=\"GoogleScreen-top\">\n      <ul class=\"nav nav-tabs\">\n        <li class=\"menu\" data-nav=\"contacts\"><a href=\"#\">Contacts</a></li>\n        <li class=\"active menu\" data-nav=\"mails\"><a href=\"#\">Mails</a></li>\n        <li class=\"menu\" data-nav=\"groups\"><a href=\"#\">Groups</a></li>\n        <li class=\"menu\" data-nav=\"folders\"><a href=\"#\">Folders</a></li>\n        <li class=\"menu\" data-nav=\"actions\"><a href=\"#\">Actions<i class=\"icon-chevron-down\"></i></a></li>\n      </ul>\n    </div>\n    <div class=\"GoogleScreen-content\">\n      \n    </div>\n  </div>";}
);

// template --- tmpl-InputValue ---
Handlebars.templates['tmpl-InputValue'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n		        <div class=\"control-group\">\n		  		<label>";
  foundHelper = helpers.label;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.label; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + ":</label><input type=\"text\"  name=\"";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"  placeholder=\"input value\"><span class=\"help-inline\" ></span>\n		  		<br/>\n		  		</div>\n                ";
  return buffer;}

  buffer += "<div class=\"InputValue\">\n		<div class='InputValueDialogGlass' />\n	    <div class=\"InputValue-content\">\n	        <h2>";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h2>\n	        <div class=\"form\">\n                ";
  stack1 = depth0.fields;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		  		<div>\n		    		<a href=\"#\" class=\"btn btn-primary inputValueBtn\">OK</a>\n		    		<a href=\"#\" class=\"btn cancelBtn\">Close</a>\n		  		</div>\n	        </div>\n	    </div>\n    </div>";
  return buffer;}
);

// template --- tmpl-LinkedInScreen ---
Handlebars.templates['tmpl-LinkedInScreen'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"LinkedInScreen\">\n    <div class=\"LinkedInScreen-top\">\n      <ul class=\"nav nav-tabs\">\n        <li class=\"active menu\" data-nav=\"connections\"><a href=\"#\">Connections</a></li>\n        <li class=\"menu\" data-nav=\"search\"><a href=\"#\">Search<i class=\"icon-chevron-down\"></i></a></li>\n        <!--<li class=\"menu\" data-nav=\"jobs\"><a href=\"#\">Jobs</a></li>-->\n        <!--<li class=\"menu\" data-nav=\"companys\"><a href=\"#\">Companys</a></li>-->\n      </ul>\n    </div>\n    <div class=\"LinkedInScreen-content\">\n      \n    </div>\n  </div>";}
);

// template --- tmpl-LiveScreen ---
Handlebars.templates['tmpl-LiveScreen'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"LiveScreen\">\n    <div class=\"LiveScreen-top\">\n      <ul class=\"nav nav-tabs\">\n        <li class=\"active menu\" data-nav=\"userInfo\"><a href=\"#\">User Infomation</a></li>\n      </ul>\n    </div>\n    <div class=\"LiveScreen-content\">\n      \n    </div>\n  </div>";}
);

// template --- tmpl-LiveUserInfo ---
Handlebars.templates['tmpl-LiveUserInfo'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"container LiveUserInfo\">\n		<table class=\"table table-striped\">\n			<tr>\n				<td>Email</td>\n				<td>";
  stack1 = depth0.emails;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.account;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</td>\n			</tr>\n            <tr>\n				<td>User Name:</td>\n				<td>";
  foundHelper = helpers.last_name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.last_name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + ".";
  foundHelper = helpers.first_name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.first_name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n			</tr>\n            <tr>\n				<td>Link:</td>\n				<td>";
  foundHelper = helpers.link;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.link; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n			</tr>\n            <td>Gender:</td>\n                <td>";
  foundHelper = helpers.gender;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.gender; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n            </tr>\n		</table>\n	</div>";
  return buffer;}
);

// template --- tmpl-Login ---
Handlebars.templates['tmpl-Login'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"Login\">\n        <h2>Login</h2>\n        <form class=\"well\" method=\"post\">\n        <label>User Name</label>\n        <div class=\"control-group\">\n  		<input type=\"text\"  name=\"username\" placeholder=\"\"><span class=\"help-inline\" ></span>\n  		</div>\n        <label>Password</label>\n        <div class=\"control-group\">\n  		<input type=\"password\"  name=\"password\"><span class=\"help-inline\" ></span>\n  		</div>\n  		<div>\n  		<div class=\"btn action login-button\">Login</div>\n  		</div>\n        </form>\n    </div>";}
);

// template --- tmpl-MainScreen ---
Handlebars.templates['tmpl-MainScreen'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"MainScreen\">\n	    <div class=\"MainScreen-header\">\n	    </div>\n	    <div class=\"MainScreen-main\">\n	    </div>\n    </div>";}
);

// template --- tmpl-SalesForceContactInfo ---
Handlebars.templates['tmpl-SalesForceContactInfo'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "Update";}

function program3(depth0,data) {
  
  
  return "Create";}

  buffer += "<div class=\"SalesForceContactInfo modal\">\n		<div class=\"SalesForceContactInfo-header modal-header\">\n			<div class=\"close btnClose\"><i class=\"icon-remove\"></i></div>\n			<h3>";
  stack1 = depth0.Id;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Contact</h3>\n		</div>\n		<div class=\"SalesForceContactInfo-content modal-body\">\n			<div class=\"form-horizontal\">\n				<div class=\"control-group\">\n					<div class=\"control-label\">Contact name:</div>\n					<div class=\"controls\">\n						<input type='text' name=\"name\" value=\"";
  foundHelper = helpers.Name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.Name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" />\n					</div>\n				</div>\n			</div>\n		</div>\n		<div class=\"SalesForceContactInfo-footer modal-footer\">\n			<div class=\"btn btn-primary btnCreate\">Save</div>\n			<div class=\"btn btnClose\">Close</div>\n		</div>\n	</div>";
  return buffer;}
);

// template --- tmpl-SalesForceContacts ---
Handlebars.templates['tmpl-SalesForceContacts'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"SalesForceContacts\">\n    	<div>\n    		<span class=\"btn btnAdd\"><i class=\"icon-plus\"></i>Add</span>\n    	</div>\n    	<div class=\"dataTableContainer\">\n	    </div>\n    </div>";}
);

// template --- tmpl-SalesForceContacts-rowItem ---
Handlebars.templates['tmpl-SalesForceContacts-rowItem'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"trow\" data-entity=\"";
  foundHelper = helpers.type;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-entity-id=\"";
  foundHelper = helpers.Id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.Id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n	     <div class=\"tcell\">";
  foundHelper = helpers.index;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.index; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</div>\n	     <div class=\"tcell\">";
  foundHelper = helpers.Name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.Name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</div>\n	     <div class=\"tcell\">\n	     	<span class=\"btn btnEdit\"><i title=\"Edit\" class=\"icon-pencil\"></i> Edit</span>\n	     	<span class=\"btn btn-danger btnDelete\"><i title=\"Delete\" class=\"icon-trash\"></i> Delete</span>\n	     </div>\n     </div>";
  return buffer;}
);

// template --- tmpl-SalesForceScreen ---
Handlebars.templates['tmpl-SalesForceScreen'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"SalesForceScreen\">\n    <div class=\"SalesForceScreen-top\">\n      <ul class=\"nav nav-tabs\">\n        <li class=\"active menu\" data-nav=\"contacts\"><a href=\"#\">Contacts</a></li>\n      </ul>\n    </div>\n    <div class=\"SalesForceScreen-content\">\n      \n    </div>\n  </div>";}
);

// template --- tmpl-Top ---
Handlebars.templates['tmpl-Top'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"Top\">\n		<div class=\"navbar  navbar-inverse navbar-fixed-top\">\n		  <div class=\"navbar-inner\">\n		    <a class=\"brand\" href=\"#\">sampleSocial</a>\n		    <ul class=\"nav\">\n		      <li data-nav=\"facebook\" class=\"menu\">Facebook</li>\n		      <li data-nav=\"google\" class=\"menu\">Google</li>\n		      <li data-nav=\"linkedIn\" class=\"menu\">LinkedIn</li>\n		      <li data-nav=\"salesforce\" class=\"menu\">SalesForce</li>\n		      <li data-nav=\"twitter\" class=\"menu\">Twitter</li>\n		      <li data-nav=\"github\" class=\"menu\">Github</li>\n		      <li data-nav=\"dropbox\" class=\"menu\">Dropbox</li>\n		      <li data-nav=\"foursquare\" class=\"menu\">Foursquare</li>\n		      <li data-nav=\"live\" class=\"menu\">Live</li>\n		      <li data-nav=\"oauth\" class=\"menu\">OAuth<i class=\"icon-chevron-down\"></i></li>\n		    </ul>\n		  </div>\n		</div>\n	</div>";}
);

// template --- tmpl-TwitterDirectMsg ---
Handlebars.templates['tmpl-TwitterDirectMsg'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"TwitterDirectMsg\">\n		<div class=\"row-fluid\">\n			<div class=\"span12\">\n				\n				<div class=\"page-header\">\n					<h3>GET direct_messages</h3>\n				</div>\n				\n				<button class=\"btn getDirectMsg\" type=\"button\">Get Ditect Messages!</button>\n				\n				<div class=\"direct-messages-container\"></div>\n				\n				<div class=\"page-header\">\n					<h3>GET direct_messages/sent</h3>\n				</div>\n				\n				<button class=\"btn getSendMsg\" type=\"button\">Get Send Messages!</button>\n				\n				<div class=\"send-messages-container\"></div>\n				\n				<div class=\"page-header\">\n					<h3>GET direct_messages/show</h3>\n				</div>\n				\n				<div class=\"input-append\">\n					<input class=\"span4 msg_id\" placeholder=\"The ID of the direct message\"  type=\"text\">\n					<button class=\"btn showMsg\" type=\"button\">Show Direct Messages!</button>\n				</div>\n				\n				<div class=\"message-container\"></div>\n				\n				<div class=\"page-header\">\n					<h3>POST direct_messages/new</h3>\n				</div>\n				\n				<div class=\"form-inline\">\n					<div class=\"input-prepend\">\n					  <span class=\"add-on\">@</span>\n					  <input class=\"input-medium screen_name\" type=\"text\" placeholder=\"screen_name\">\n					</div>\n					\n					<div class=\"input-append\">						\n						<input type=\"text\" class=\"input-large text\" placeholder=\"Text\">\n						<button type=\"button\" class=\"btn sendMsg\">Send Message</button>\n					</div>\n				</div>\n				\n				<div class=\"send-container\"></div>\n				\n			</div>\n		</div>\n	</div>";}
);

// template --- message-template ---
Handlebars.templates['message-template'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n	   <div class=\"tweet-container\" message_id=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n			<div class=\"row-fluid\">\n				<div class=\"span1\">@";
  foundHelper = helpers.sender_screen_name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.sender_screen_name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</div>\n				<div class=\"span11\">\n					\n					<div class=\"row-fluid\">\n						<div class=\"span11\">";
  foundHelper = helpers.created_at;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.created_at; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</div>\n					</div>\n					<div class=\"row-fluid\">\n						<div class=\"span11\"><strong>";
  foundHelper = helpers.text;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</strong></div>\n					</div>\n				</div>\n			</div>\n		</div>\n	    ";
  return buffer;}

  buffer += "<div class=\"message-list\">\n	   ";
  stack1 = depth0.messages;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>";
  return buffer;}
);

// template --- tmpl-TwitterScreen ---
Handlebars.templates['tmpl-TwitterScreen'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n			       <div class=\"tweet-container\" tweet_id=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n						<div class=\"row-fluid\">\n							<div class=\"span1\"><img src=";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.profile_image_url;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + " /></div>\n							<div class=\"span11\">\n								\n								<div class=\"row-fluid\">\n									<div class=\"span11\">\n										<strong>";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</strong>@";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.screen_name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\n									</div>\n								</div>\n								<div class=\"row-fluid\">\n									<div class=\"span11\">";
  foundHelper = helpers.text;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</div>\n								</div>\n								\n								<div class=\"row-fluid\">\n									<div class=\"span11\">\n										<span class=\"destroy\"><i class=\"icon-trash\"></i>Destroy</span>\n									</div>\n								</div>\n							\n							</div>\n						</div>\n					</div>\n			        ";
  return buffer;}

  buffer += "<div class=\"TwitterScreen\">\n    <div class=\"TwitterScreen-content container\">\n    	\n        <div class=\"tabbable tabs-left\">\n          <ul class=\"nav nav-tabs\">\n            <li class=\"active profile\"><a data-toggle=\"tab\">My Profile</a></li>\n            <li class=\"timeline\"><a data-toggle=\"tab\">Timeline</a></li>\n            <li class=\"tweets\"><a data-toggle=\"tab\">Tweets</a></li>\n            <li class=\"directMsg\"><a data-toggle=\"tab\">Direct Messages</a></li>\n          </ul>\n		<div class=\"tab-content\">\n		\n			<div class=\"TwitterProfile\">\n				<div class=\"row-fluid\">\n				  <div class=\"span12\">\n				  	<div class=\"page-header\">\n					  <h3>My Profile:</h3>\n					</div>\n				    <div class=\"hero-unit row-fluid\">\n				      <div class=\"span6\">\n				       \n				        <div class=\"row-fluid\">\n				          <div class=\"span6\">name:</div>\n				          <div class=\"span6\">";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</div>\n				        </div>\n				        \n				        <div class=\"row-fluid\">\n				          <div class=\"span6\">screen name:</div>\n				          <div class=\"span6\">";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.screen_name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</div>\n				        </div>\n				        \n				        <div class=\"row-fluid\">\n				          <div class=\"span6\">location:</div>\n				          <div class=\"span6\">";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.location;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</div>\n				        </div>\n				        \n				      </div>\n				      <div class=\"span6\"><img src=";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.profile_image_url;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + " /></div>\n				    </div>\n				  </div>\n				</div>\n				\n				<div class=\"input-append\">\n					<input class=\"span4 status\" type=\"text\">\n					<button class=\"btn go\" type=\"button\">Go!</button>\n				</div>\n				\n				<div class=\"page-header\">\n					  <h3>My Tweets:</h3>\n					</div>\n				 <div class=\"timeline-container\">\n			       ";
  stack1 = depth0.timeline;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				</div>\n				\n				\n			</div>\n			\n        </div>\n    	\n    </div>\n  </div>";
  return buffer;}
);

// template --- tmpl-TwitterTimeline ---
Handlebars.templates['tmpl-TwitterTimeline'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n			       <div class=\"tweet-container\" tweet_id=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n						<div class=\"row-fluid\">\n							<div class=\"span1\"><img src=";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.profile_image_url;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + " /></div>\n							<div class=\"span11\">\n								\n								<div class=\"row-fluid\">\n									<div class=\"span11\">\n										<strong>";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</strong>@";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.screen_name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\n									</div>\n								</div>\n								<div class=\"row-fluid\">\n									<div class=\"span11\">";
  foundHelper = helpers.text;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</div>\n								</div>\n								<div class=\"row-fluid\">\n									<div class=\"span11\">\n										<span class=\"retweet\"><i class=\"icon-share-alt\"></i>Retweet</span>\n										<span class=\"favorite\"><i class=\"icon-star\"></i>Favorite</span>\n									</div>\n								</div>\n							\n							</div>\n						</div>\n					</div>\n			        ";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n			       <div class=\"tweet-container\" tweet_id=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n						<div class=\"row-fluid\">\n							<div class=\"span1\"><img src=";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.profile_image_url;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + " /></div>\n							<div class=\"span11\">\n								\n								<div class=\"row-fluid\">\n									<div class=\"span11\">\n										<strong>";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</strong>@";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.screen_name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\n									</div>\n								</div>\n								<div class=\"row-fluid\">\n									<div class=\"span11\">";
  foundHelper = helpers.text;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</div>\n								</div>\n								<div class=\"row-fluid\">\n									<div class=\"span11\">\n										<span class=\"retweet\"><i class=\"icon-share-alt\"></i>Retweet</span>\n										<span class=\"favorite\"><i class=\"icon-star\"></i>Favorite</span>\n									</div>\n								</div>\n							\n							</div>\n						</div>\n					</div>\n			        ";
  return buffer;}

function program5(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n			       <div class=\"tweet-container\" tweet_id=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n						<div class=\"row-fluid\">\n							<div class=\"span1\"><img src=";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.profile_image_url;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + " /></div>\n							<div class=\"span11\">\n								\n								<div class=\"row-fluid\">\n									<div class=\"span11\">\n										<strong>";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</strong>@";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.screen_name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\n									</div>\n								</div>\n								<div class=\"row-fluid\">\n									<div class=\"span11\">";
  foundHelper = helpers.text;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</div>\n								</div>\n								<div class=\"row-fluid\">\n									<div class=\"span11\">\n										<span class=\"retweet\"><i class=\"icon-share-alt\"></i>Retweet</span>\n										<span class=\"favorite\"><i class=\"icon-star\"></i>Favorite</span>\n									</div>\n								</div>\n							\n							</div>\n						</div>\n					</div>\n			        ";
  return buffer;}

function program7(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n			       <div class=\"suggestion-container alert alert-success\">\n						<div class=\"name\">";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</div>\n						<div class=\"size\">";
  foundHelper = helpers.size;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.size; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</div>\n					</div>\n			        ";
  return buffer;}

  buffer += "<div class=\"TwitterTimeLine\">\n		<div class=\"row-fluid\">\n			<div class=\"span12\">\n				<div class=\"page-header\">\n					<h3>TwitterTimeLine</h3>\n				</div>\n		       \n		       <div class=\"timeline-container\">\n			       ";
  stack1 = depth0.timeline;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				</div>\n				\n				<div class=\"page-header\">\n					<h3>MentionTimeLine</h3>\n				</div>\n		       \n		       <div class=\"timeline-container\">\n			       ";
  stack1 = depth0.mentions;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				</div>\n				\n				\n				<div class=\"page-header\">\n					<h3>Retweets of Me</h3>\n				</div>\n		       \n		       <div class=\"timeline-container\">\n			       ";
  stack1 = depth0.retweets;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				</div>\n				\n				\n				<div class=\"page-header\">\n					<h3>Suggestions</h3>\n				</div>\n				 <div class=\"suggestions-container\">\n			       ";
  stack1 = depth0.suggestions;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(7, program7, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				</div>\n				\n			</div>\n		</div>\n	</div>";
  return buffer;}
);

// template --- tmpl-TwitterTweet ---
Handlebars.templates['tmpl-TwitterTweet'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"TwitterTweet\">\n		<div class=\"row-fluid\">\n			<div class=\"span12\">\n				\n				<div class=\"page-header\">\n					<h3>GET statuses/retweets/:id</h3>\n				</div>\n				\n				<div class=\"input-append\">\n					<input class=\"span4 tweet_id\" placeholder=\"The numerical ID of the desired status.\"  type=\"text\">\n					<button class=\"btn getRetweetById\" type=\"button\">Get!</button>\n				</div>\n				\n				<div class=\"tweet-list-container\"></div>\n				\n				<div class=\"page-header\">\n					<h3>GET statuses/show/:id</h3>\n				</div>\n				\n				<div class=\"input-append\">\n					<input class=\"span4 status_id\" placeholder=\"The numerical ID of the desired Tweet.\"  type=\"text\">\n					<button class=\"btn getStatusById\" type=\"button\">Get!</button>\n				</div>\n				\n				<div class=\"status-content-container\"></div>\n				\n				<div class=\"page-header\">\n					<h3>GET search/tweets</h3>\n				</div>\n				\n				<div class=\"input-append\">\n					<input class=\"span4 query\" placeholder=\"Query String\"  type=\"text\">\n					<button class=\"btn searchTweets\" type=\"button\">Get!</button>\n				</div>\n				\n				<div class=\"search-result-container\"></div>\n				\n			</div>\n		</div>\n	</div>";}
);

// template --- tweets-template ---
Handlebars.templates['tweets-template'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n	   <div class=\"tweet-container\" tweet_id=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n			<div class=\"row-fluid\">\n				<div class=\"span1\"><img src=";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.profile_image_url;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + " /></div>\n				<div class=\"span11\">\n					\n					<div class=\"row-fluid\">\n						<div class=\"span11\">\n							<strong>";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</strong>@";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.screen_name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\n						</div>\n					</div>\n					<div class=\"row-fluid\">\n						<div class=\"span11\">";
  foundHelper = helpers.text;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	    ";
  return buffer;}

  buffer += "<div class=\"tweet-list\">\n	   ";
  stack1 = depth0.tweets;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>";
  return buffer;}
);

// template --- status-template ---
Handlebars.templates['status-template'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"tweet-container\" tweet_id=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n		<div class=\"row-fluid\">\n			<div class=\"span1\"><img src=";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.profile_image_url;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + " /></div>\n			<div class=\"span11\">\n				\n				<div class=\"row-fluid\">\n					<div class=\"span11\">\n						<strong>";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</strong>@";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.screen_name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\n					</div>\n				</div>\n				<div class=\"row-fluid\">\n					<div class=\"span11\">";
  foundHelper = helpers.text;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</div>\n				</div>\n			</div>\n		</div>\n	</div>";
  return buffer;}
);
