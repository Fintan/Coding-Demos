this["JST"] = this["JST"] || {};

this["JST"]["src/templates/pagingnav.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<button id='prev'>Previous</button>\n<button id='next'>Next</button>\n";});

this["JST"]["src/templates/details.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n\n\n";
  buffer += "\n";
  buffer += " \n";
  buffer += " \n<p>";
  stack1 = depth0.record;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.display_title;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</p>\n";
  buffer += "\n<p>";
  stack1 = depth0.record;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.meaningful_description;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</p>\n<p>";
  stack1 = depth0.record;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.additional_text;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</p>\n";
  buffer += "\n";
  buffer += "\n";
  buffer += "\n";
  buffer += "\n\n\n<button id='back'>Back</button>\n";
  return buffer;});

this["JST"]["src/templates/table.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, foundHelper;
  buffer += "\n		<tr id='";
  stack1 = depth0.id;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "' data-viewable='";
  stack1 = depth0.viewable;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "'>\n			<td>";
  stack1 = depth0.resource_type;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</td>\n			<td>\n				";
  buffer += " \n				";
  stack1 = depth0.viewable;
  stack2 = depth0.id;
  stack3 = depth0.media_type;
  foundHelper = helpers.addIcon;
  stack1 = foundHelper ? foundHelper.call(depth0, stack3, stack2, stack1, {hash:{}}) : helperMissing.call(depth0, "addIcon", stack3, stack2, stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "\n			</td>\n			<td>";
  stack1 = depth0.display_title;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</td>\n			<td>";
  stack1 = depth0.language;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</td>\n		</tr>\n		";
  return buffer;}

  buffer += "\n\n\n	<table id='mediatable'>\n		<thead>\n			<th id='resource_type'>";
  stack1 = depth0.mediaItemsHeader;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.resource_type;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</th>\n			<th id='media_type_id'>";
  stack1 = depth0.mediaItemsHeader;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.media_type_id;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</th>\n			<th id='display_title'>";
  stack1 = depth0.mediaItemsHeader;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.display_title;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</th>\n			<th id='language'>";
  stack1 = depth0.mediaItemsHeader;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.language;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</th>\n		</thead>\n		\n		<tbody>\n		\n		";
  stack1 = depth0.mediaItems;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		\n		</tbody>\n		\n		";
  buffer += "\n		";
  buffer += "\n			";
  buffer += "  ";
  foundHelper = helpers.media_type;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.media_type; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " ";
  foundHelper = helpers.display_title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.display_title; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " ";
  foundHelper = helpers.language;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.language; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\n		";
  buffer += "\n		\n	</table>";
  return buffer;});