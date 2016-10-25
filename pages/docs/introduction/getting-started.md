---
title: Getting Started
order: 1
---



## Content Types

Content types are used to describe the different kinds of content that are needed in a Fridge. Think of content types as high level names to describe content *(i.e. Blog Post, Page, Event, Person, Comment.)* Content types are made up of __parts__ which describe each piece of content that makes up the content type. There are several different content parts to create practically any kind of content type which can be seen in greater detail in the [Parts Reference](/docs/introduction/parts/).

### Creating The First Content Type

After logging into Fridge for the first time, you are presented with a clean slate. This is on purpose as a Fridge should not make any assumptions about what kind of content you need or don't need for your project. As such, create a content type to get started!

To create a new content type, click the + symbol next to the Content title in the sidebar. Go ahead and give your content type a name!

### Adding Parts

_Parts_ are a piece of content used to describe a content type. For example, if you are reading a website article, you can think of the _Title, Url, Meta Title, Author, Date, Body, Comments_ as different parts of the article. There's no limit to how many parts you can add to any particular content type. Construct content types as simple or as complex as you need.

To add a part to your content type, click the Add button. Clicking on the new part will open up the following options:

* __Label__ - The display name of this part of the content. Using the blog post example, this may be Title.
* __Name__ - The name you will use to access this part of the content through the API. This should be a slugged name.
* __Hint__ - Used as helper text for a user to know what to enter into this part of the content.  
* __Required?__ - Choose if this should be a required field when entering content into this part. When selected, if left blank, you will not be able to save the content.
* __Display Size__ - The display width of the part in the dashboard. The dashboard uses a 3 column grid to display content, which can be customized to a 2 or 1 column grid in the content type settings.  
* __Type__ - Set the type of content this part will contain. For a list of all available parts, please see the [Parts Reference](/docs/introduction/parts/) page.

Clicking again on the top bar of the Part will close the menu. Continue to add some more parts to your content type! 

### Options

There are many different options available to both content types and their parts. Options are broken up into a few different categories:

* __Display Options__ - Customize how the content should be displayed in Fridge. There are different layout and field display options as well as sorting capabilities.
* __API Options__ - Control how content can be accessed when using the API as well as react to content creation with email notificatons.
* Check out the [Content Type Reference](/docs/introduction/content-types/) page for a detailed explanation of each available option. 

## Creating Content

After you have created a content type, it will appear in the Fridge sidebar. Clicking on the content type displays a list of all content of that type, as well as ways to create new content. When creating a new piece of content of a particular type, all of the content parts from that type are presented as input fields in a beautiful rich layout.

### Edit Model

The Edit Model button at the top of a content type allows you to modify the parts in that conent type. The resulting options will be identical to the ones found when you first created the content type.  

## Settings

The Settings content type functions in exactly the same way as a normal content type, but should be used for global content for your application. For instance, this is where you might put copyright information, footer links, or a sitewide logo.

